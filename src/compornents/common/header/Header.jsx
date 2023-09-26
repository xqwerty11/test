import styles from './Header.module.scss';
import clsx from 'clsx';
//className에 문자에 변수가 치환되고 있기 때문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스 연결을 삼항연산자로 조건처리도 가능
console.log(styles);

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
