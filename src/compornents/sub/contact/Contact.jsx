import Layout from '../../common/layout/Layout';
import styles from './Contact.module.scss';
import clsx from 'clsx';

export default function Contact() {
	return (
		<Layout title={'Contact'} styleName={styles.contact}>
			<p>콘택트 페이지입니다</p>
		</Layout>
	);
}
