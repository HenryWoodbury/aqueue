import { Router } from 'express';

import { upload, download } from '../controllers/csv.controller';
import { getRosters } from '../controllers/rosters.controller';
import uploadFile from '../middleware/upload';

const rostersRoutes = Router();

rostersRoutes
  .route('/csv/upload')
  .post(uploadFile.single('file'), upload);

rostersRoutes
  .route('/csv/download')
  .get(download);

rostersRoutes
  .route('/rosters')
  .get(getRosters);

export { rostersRoutes };