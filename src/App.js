import './style/Global.scss';
import { Route } from 'react-router-dom';
import Header from './compornents/common/header/Header';
import Department from './compornents/sub/department/Department';
import Youtube from './compornents/sub/youtube/Youtube';

function App() {
	return (
		<>
			<Header />

			<Route>
				<Department />
			</Route>

			<Youtube />
		</>
	);
}

export default App;
