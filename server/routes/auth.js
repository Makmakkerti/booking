import express from 'express';
import { showMessage } from '../controllers/auth.js';

const AuthRouter = express.Router();

AuthRouter.get('/:message', showMessage);

export default AuthRouter;
