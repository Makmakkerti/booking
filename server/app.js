import express from 'express';
import logger from './utils/logger.js';
import autoloadPath from './utils/autoloader.js';
import cors from 'cors';
import connectDB from './utils/connectDB.js';

const app = express();

// Connect to database
connectDB();

// Using cors to prevent blocking from client
app.use(cors());

// Healthcheck
app.get('/', (_req, res) => {
	logger.info('Healthcheck');
	res.status(201).send('App is running');
});

// Autoload routes from folder
autoloadPath(app);

export default app;
