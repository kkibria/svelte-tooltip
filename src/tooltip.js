import { writable } from 'svelte/store';

export function tooltip(timeout = 3000) {
	const v = {
		text: "",
		top: 0,
		left: 0
	}
	let store = writable(v);
	let timer;
	let leave = function (ev) {
		clearTimeout(timer);
		store.set(v);
	};
	let enter = function (ev) {
		let bb = ev.target.getBoundingClientRect();
		let top = bb.top + bb.height + 5;
		let left = bb.left + bb.width / 3;
		let text = ev.target.getAttribute('tooltip');
		store.set({
			text: text,
			top: top,
			left: left
		});
		clearTimeout(timer);
		timer = setTimeout(() => leave(ev), timeout);
	};
	return {
		store: store,
		enter: enter,
		leave: leave
	}
}