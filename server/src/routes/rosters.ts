import { Router } from 'express';

import { uploadRosters, downloadRosters, downloadRosterByTeamId } from '../controllers/csv.controller';
import { getRosters, getRosterByTeamId } from '../controllers/rosters.controller';
import uploadFile from '../middleware/upload';

const rostersRoutes = Router();

rostersRoutes
  .route('/rosters/upload')
  .post(uploadFile.single('file'), uploadRosters);

rostersRoutes
  .route('/rosters/download')
  .get(downloadRosters);

rostersRoutes
  .route('/rosters/download/:teamId')
  .get(downloadRosterByTeamId);

rostersRoutes
  .route('/rosters')
  .get(getRosters);

rostersRoutes
  .route('/rosters/:teamId')
  .get(getRosterByTeamId);

export { rostersRoutes };