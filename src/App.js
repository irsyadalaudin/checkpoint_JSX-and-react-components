import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePhoto from './components/ProfilePhoto.js';
import FullName from './components/FullName.js';
import Address from './components/Address.js';

function App() {
	return (
		<div className='bg-secondary bg-gradient rounded-2 w-75 mt-5 m-auto text-white'>	
			<div className='row align-items-center gx-5 pt-5'>
				<div className='col'>
					<ProfilePhoto />
				</div>
				<div className='col'>
					<FullName />
					<Address />
				</div>
			</div>
		</div>
	);
}

export default App;