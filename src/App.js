import './style/Global.scss';
import { Route } from 'react-router-dom';
import Header from './compornents/common/header/Header';
import Department from './compornents/sub/department/Department';
import Youtube from './compornents/sub/youtube/Youtube';

function App() {
	return (
		<>
			<Header />

			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>
		</>
	);
}

export default App;
