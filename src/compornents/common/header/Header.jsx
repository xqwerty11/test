import styles from './Header.module.scss';
import clsx from 'clsx';

export default function Header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>LOGO</h1>
			<ul>
				<li>Department</li>
				<li>Glleary</li>
				<li>Youtube</li>
				<li>Members</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
