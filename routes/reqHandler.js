import { Router } from 'express';
import { Controllers } from '../controllers/controllers.js';

const reqHandler = Router();

reqHandler.get('/worko/users',Controllers.findUsers)

reqHandler.get('/worko/user/:userId',Controllers.findOneUser)

reqHandler.post('/worko/user',Controllers.createUser);

reqHandler.patch('/worko/user/:userId',Controllers.patchUpdateUserById);

reqHandler.put('/worko/user/:userId',Controllers.putUpdateUserById);

reqHandler.delete('/worko/user/:userId',Controllers.deleteUserById);

export { reqHandler };
