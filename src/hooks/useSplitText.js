export function useSplitText(ref, gap = 0.1, delay = 0) {
	return (ref, gap = 0.1, delay = 0) => {
		let tags = '';
		let count = 0;

		for (let letter of ref.current.innerText) {
			tags += `<span style='transition-delay:${gap * count + delay}s'>${letter}</span>`;
			count++;
		}

		ref.current.innerText = '';

		ref.current.innerHTML = tags;
	};
}
