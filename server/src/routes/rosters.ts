import { Router } from 'express';

import { uploadRosters, downloadRosters } from '../controllers/csv.controller';
import { getRosters, getRosterByTeamId } from '../controllers/rosters.controller';
import uploadFile from '../middleware/upload';

const rostersRoutes = Router();

rostersRoutes
  .route('/csv/upload')
  .post(uploadFile.single('file'), uploadRosters);

rostersRoutes
  .route('/csv/download')
  .get(downloadRosters);

rostersRoutes
  .route('/rosters')
  .get(getRosters);

rostersRoutes
  .route('/rosters/:teamId')
  .get(getRosterByTeamId);

export { rostersRoutes };