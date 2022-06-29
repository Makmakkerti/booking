export const showMessage = (req, res) => {
	res.status(200).send(`Test message: ${req.params.message}`);
};
