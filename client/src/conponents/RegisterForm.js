export const RegisterForm = ({
	handleSubmit,
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
}) => (
	<form onSubmit={handleSubmit} className='mt-3'>
		<div className='form-group mb-3'>
			<label className='form-label'>Name</label>
			<input
				type='text'
				className='form-control'
				placeholder='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
		<div className='form-group mb-3'>
			<label className='form-label'>Email</label>
			<input
				type='text'
				className='form-control'
				placeholder='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
		</div>
		<div className='form-group mb-3'>
			<label className='form-label'>Password</label>
			<input
				type='text'
				className='form-control'
				placeholder='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
		<button className='btn btn-primary'>Submit</button>
	</form>
);
