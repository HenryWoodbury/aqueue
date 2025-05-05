import { Request, Response, NextFunction } from 'express';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';
import { Parser as CsvParser } from '@json2csv/plainjs';

import { Rosters, IRosterModel, IRosterProperties } from '../db/models/rosters.model';

// Could abstract upload for different CSV files
const uploadRosters = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      res.status(400).send("Please upload your league Rosters CSV file!");
//    test req.file.filename === ...
      return;
    }
    const rosters = [] as IRosterModel[];
    // TODO: Move path to constant
    const path = "./resources/static/assets/uploads/" + req.file.filename;

    createReadStream(path)
      .pipe(
        parse({ 
          headers: [
            'teamId',
            'teamName',
            'ottoneuId',
            'fgMajorLeagueId',
            'fgMinorLeagueId',
            'playerName',
            'mlbTeam',
            'position',
            'salary'
          ], 
          renameHeaders: true 
        })
      )
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        const newDate = new Date();
        if (row.ottoneuId) {
          rosters.push(row);
          row.createdAt = newDate;
          row.updatedAt = newDate;
        }
      })
      .on("end", () => {
        // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk
        Rosters.bulkCreate(rosters, { updateOnDuplicate: [            
          'teamId',
          'teamName',
          'fgMajorLeagueId',
          'fgMinorLeagueId',
          'playerName',
          'mlbTeam',
          'position',
          'salary',
          'updatedAt',
        ]})
// Delete any records where createdAt !== updatedAt ? 
// Otherwise new upload will combine last upload records with new ones that aren't duplicates
// Potentially use a beforeBulkCreate hook to call truncate() or destroyAll()
// https://sequelize.org/docs/v6/other-topics/hooks/
      .then(() => {
        const fileName = req.file?.originalname ? req.file.originalname : 'unknown file';
        res.status(200).send({
          message: `The file ${fileName} got uploaded successfully!`,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Couldn't import data into database.",
          error: error.message,
        });
      });
    });
  } catch (error) {
    console.log(error);
    const fileName = req.file?.originalname ? req.file.originalname : 'unknown file';
    res.status(500).send({
      message: `Failed to upload the file: ${fileName}`,
    });
  }
};

const downloadRosters = (req: Request, res: Response, next: NextFunction) => {
  Rosters.findAll().then((objs) => {
    const rosters = [] as IRosterProperties[];;
    
    // This will include CreatedAt, UpdatedAt, DeletedAt
    // Could filter these out easily enough
    objs.forEach((obj) => {
      rosters.push({ ...obj });
    });

    const csvParser = new CsvParser();
    const csvData = csvParser.parse(rosters);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=rosters.csv');

    res.status(200).end(csvData);
  });
};

export { uploadRosters, downloadRosters };
/*
    const csvFields = ['id', 'name', 'email',
                     'username', 'dob', 'company',
                     'address', 'location', 'salary',
                     'about', 'role'];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(employees);
*/
