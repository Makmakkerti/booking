import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.status(201).send('App is running');
});

export default app;
