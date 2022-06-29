import express from 'express';
import { showMessage, registerUser } from '../controllers/auth.js';

const AuthRouter = express.Router();

AuthRouter.get('/:message', showMessage);
AuthRouter.post('/register', registerUser);

export default AuthRouter;
