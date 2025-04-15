import fs from 'fs';
import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer';

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    console.log(file.originalname);
    const dir = './resources/static/assets/uploads';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (_req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const csvFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  console.log('Reading file in middleware', file.originalname);
  if (file == undefined) {
    cb(new Error('Please upload a file to proceed.'));
  } else if (file.mimetype.includes('csv')) {
    cb(null, true);
  } else {
    cb(new Error('Please upload only csv file as only CSV is supported for now.'));
  }
};

export default multer({
    storage: storage,
    fileFilter: csvFilter
});