import { Router } from 'express';

import { register } from 'controllers/user.controller';

export default (router: Router) => router.post('/user/register', register);
