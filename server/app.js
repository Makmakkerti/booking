import express from 'express';
import path from 'path';
import { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();

// Healthcheck
app.get('/', (req, res) => {
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
