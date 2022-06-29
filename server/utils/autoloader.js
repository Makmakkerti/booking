import path from 'path';
import { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const prefix = '/api/';
const routePath = path.join(__dirname, '../routes');

const autoloadPath = (app) => {
	fs.readdirSync(routePath).forEach(async (filename) => {
		let route = path.join(routePath, filename);
		try {
			const item = await import(route);
			app.use(prefix + path.parse(filename).name, item.default);
		} catch (error) {
			console.log(error.message);
		}
	});
};

export default autoloadPath;
