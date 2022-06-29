import express from 'express';
import logger from './utils/logger.js';
import path from 'path';
import winston from 'winston';
import { dirname } from 'path';
import colors from 'colors';
import fs from 'fs';
import { fileURLToPath } from 'url';

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
	const custom_format = winston.format.printf(
		({ level, message, timestamp, ...metadata }) =>
			`${colors.green(`[${level.toUpperCase()}]`)}: ${message}\n${
				metadata && Object.keys(metadata).length ? JSON.stringify(metadata, null, 2) : ''
			}`
	);

	logger.add(
		new winston.transports.Console({
			format: custom_format,
		})
	);
}

const app = express();

// Healthcheck
app.get('/', (req, res) => {
	logger.info('Healthcheck');
	res.status(201).send('App is running');
});

// Routes autoloader
const __dirname = dirname(fileURLToPath(import.meta.url));
const prefix = '/api/';
const routePath = path.join(__dirname, 'routes');

fs.readdirSync(routePath).forEach(async (filename) => {
	let route = path.join(routePath, filename);
	try {
		const item = await import(route);
		app.use(prefix + path.parse(filename).name, item.default);
	} catch (error) {
		console.log(error.message);
	}
});

export default app;
