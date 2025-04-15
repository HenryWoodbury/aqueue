import { Request, Response, NextFunction } from 'express';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';
import { Parser as CsvParser } from '@json2csv/plainjs';

import { Rosters, IRosterModel, IRosterProperties } from '../db/models/rosters.model';

const upload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      res.status(400).send("Please upload a CSV file!");
      return;
    }
    const rosters = [] as IRosterModel[];
    // TODO: Move path to constant
    const path = "./resources/static/assets/uploads/" + req.file.filename;

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        rosters.push(row);
      })
      .on("end", () => {
        // TODO: How do I overwrite the old table
        Rosters.bulkCreate(rosters)
          .then(() => {
            const fileName = req.file?.originalname ? req.file.originalname : 'unknown file';
            res.status(200).send({
              message: `The file ${fileName} got uploaded successfully!`,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Couldn't import data into database!",
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

const download = (req: Request, res: Response, next: NextFunction) => {
  Rosters.findAll().then((objs) => {

    const rosters = [] as IRosterProperties[];;

    objs.forEach((obj) => {
      rosters.push({ ...obj });
    });

// To set custom fields see https://juanjodiaz.github.io/json2csv/#/advanced-options/data-selection
    const csvParser = new CsvParser();
    const csvData = csvParser.parse(rosters);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=employees.csv');

    res.status(200).end(csvData);
  });
};

export default {
  upload,
  download,
};

export { upload, download };