import { useState } from 'react';
import { RegisterForm } from '../conponents/RegisterForm';

export const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('name', name);
		console.log('email', email);
		console.log('Info sent to server!');
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
