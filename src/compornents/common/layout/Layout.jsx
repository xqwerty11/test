import styles from './Layout.module.scss';
import clsx from 'clsx';

export default function Layout(props) {
	return (
		<section className={clsx(styles.layout)}>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1>Sub Page title</h1>
				{/* 해당 컴포넌트를 특정 컨텐츠를 감싸주면 감싸진내용들이 props.children으로 전달됨 */}
				{props.children}
			</div>
		</section>
	);
}
