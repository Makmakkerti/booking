export const showMessage = (req, res) => {
	res.status(200).send(`Test message: ${req.params.message}`);
};

export const registerUser = (req, res) => {
	console.log('Req', req.body);
	res.status(201).json({ ...req.body, ok: 'Created successfully!' });
};
