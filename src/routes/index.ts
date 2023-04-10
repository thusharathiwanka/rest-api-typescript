import { Router } from 'express';

import userRoute from './user.route';

const router = Router();

export default (): Router => {
  userRoute(router);
  return router;
};
