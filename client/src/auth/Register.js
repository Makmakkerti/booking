import { useState } from 'react';
import { RegisterForm } from '../conponents/RegisterForm';
import axios from 'axios';

export const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.table({ name, email, password });
		const data = {
			name,
			email,
			password,
		};

		try {
			const response = await axios.post('http://localhost:5000/api/auth/register', data);
			console.log('response', response);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<div className='container-fluid bg-secondary p-5 text-center'>
				<h1>Register</h1>
			</div>

			<div className='container'>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<RegisterForm
							handleSubmit={handleSubmit}
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
