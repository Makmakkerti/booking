import express from 'express';
import { AuthRouter } from './routes/auth.js';
const prefix = '/api/';

const app = express();

// Healthcheck
app.get('/', (req, res) => {
	res.status(201).send('App is running');
});

app.use(prefix + 'auth', AuthRouter);

export default app;
