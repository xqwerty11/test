import Layout from '../../common/layout/Layout';
// import styles from './Department.module.scss';
// import clsx from 'clsx';
import styles from './Department.module.scss';

export default function Department() {
	return (
		<Layout title={'Department'}>
			<p>디파트먼트 페이지입니다</p>
			<ul>
				<li className={styles.abc}>list1</li>
				<li>list2</li>
				<li>list3</li>
				<li>list4</li>
			</ul>
		</Layout>
	);
}
