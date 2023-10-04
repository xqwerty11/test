import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ title, children, styleName }) {
	const [IsOn, setIsOn] = useState(false);
	const frame = useRef(null);
	const tit = useRef(null);

	//인수로 참조객체를 받아서 참조객체의 글자값을 반복돌면서 span으로 감싸주는 함수
	const splitText = (ref, gap = 0.1, delay = 0) => {
		//문자열이 담길 변수 초기화
		let tags = '';
		let count = 0;
		//참조객체안쪽의 글자를 innerText로 구해서
		//for of로 반복처리하면서 span태그로 감싸줌
		for (let letter of ref.current.innerText) {
			tags += `<span style='transition-delay:${gap * count + delay}s'>${letter}</span>`;
			count++;
		}

		//기존 참조객체 안쪽에 글자는 지워주고
		ref.current.innerText = '';
		//span으로 감싸준 문자열을 참조객체의 innerHTML으로 삽입
		ref.current.innerHTML = tags;
	};

	useEffect(() => {
		//컴포넌트가 마운트되자마자 h1요소가 담겨있는 innerHTML으로 삽입
		splitText(tit, 0.1, 1);
		//splitText함수가 기존 가상돔요소를 변경시 약간의 시간이 걸리기 때문에
		//0.3초 뒤에 span으로 분리가 완료된 이후 on클래스 추가
		setTimeout(() => setIsOn(true), 300);
	}, []);

	return (
		<section ref={frame} className={clsx(styles.layout, styleName, IsOn ? styles.on : '')}>
			<figure></figure>

			<div className={clsx(styles.content, styleName)}>
				<h1 ref={tit}>{title}</h1>
				{children}
			</div>
		</section>
	);
}
