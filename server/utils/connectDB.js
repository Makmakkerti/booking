import mongoose from 'mongoose';
import 'dotenv/config';
import colors from 'colors';

const options = {
	useNewUrlParser: true,
};

// connect DB
const dbClient = () => {
	mongoose
		.connect(process.env.DATABASE, options)
		.then(() => {
			console.log(`${colors.rainbow('Connected to DB')}`);
		})
		.catch((err) => {
			console.log(`${colors.red(err.message)}`);
		});
};

export default dbClient;
