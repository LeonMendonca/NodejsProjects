import { Router } from 'express';
import { Controllers } from '../controllers/controllers.js';

const reqHandler = Router();

reqHandler.get('/worko/user',Controllers.findUsers)

reqHandler.get('/worko/user/:userId',Controllers.findOneUser)

reqHandler.post('/worko/user',Controllers.createUser);

export { reqHandler };
