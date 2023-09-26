import './style/Global.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './compornents/common/header/Header';
import Department from './compornents/sub/department/Department';
import Youtube from './compornents/sub/youtube/Youtube';
import Members from './compornents/sub/members/Members';
import Gallery from './compornents/sub/gallary/Gallary';
import Contact from './compornents/sub/contact/Contact';

function App() {
	return (
		<>
			{/* Switch안쪽에서 중첩되는 조건 라우트에 컴포넌트가 있을때 위쪽의 조건의 컴포넌트만 호출하고 나머지 무시 */}
			<Switch>
				<Route exact path='/'>
					{/* 메인페이지 전용 헤더 */}
					<Header isMain={true} />
				</Route>

				<Route path='/'>
					{/* 서브페이지 전용 헤더 */}
					<Header isMain={false} />
				</Route>
			</Switch>

			<Route path='/department' component={Department} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/members' component={Members} />

			<Route path='/gallery' component={Gallery} />

			<Route path='/contact' component={Contact} />
		</>
	);
}

export default App;
