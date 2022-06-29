import express from 'express';
import { showMessage } from '../controllers/auth';

const AuthRouter = express.Router();

AuthRouter.get('/:message', showMessage);

export { AuthRouter };
