import './style/Global.scss';
import { Route } from 'react-router-dom';
import Header from './compornents/common/header/Header';
import Department from './compornents/sub/department/Department';
import Youtube from './compornents/sub/youtube/Youtube';
import Members from './compornents/sub/members/Members';
import Gallery from './compornents/sub/gallary/Gallary';
import Contact from './compornents/sub/contact/Contact';

function App() {
	return (
		<>
			<Header />

			<Route path='/department' component={Department} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/members' component={Members} />

			<Route path='/gallery' component={Gallery} />

			<Route path='/contact' component={Contact} />
		</>
	);
}

export default App;
