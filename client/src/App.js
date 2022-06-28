import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './conponents/TopNav';
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
	return (
		<BrowserRouter>
			<TopNav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
