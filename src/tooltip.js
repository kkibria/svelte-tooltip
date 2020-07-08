import { writable } from 'svelte/store';
	
	export function tooltip(timeout = 3000) {
		const v = {
			text: "",
			top: 0,
			left: 0
		}
		let store = writable(v);
		let leave = function (ev) {
				store.set(v);
		};
		let enter = function (ev) {
			let par = ev.target.parentElement.getBoundingClientRect();
			let bb = ev.target.getBoundingClientRect();
			let top = (bb.top + bb.bottom)/2 + 20 - par.top;
			let left = (bb.left + bb.right)/2 - par.left;
			let text = ev.target.getAttribute('tooltip');
				store.set({
					text: text,
					top: top,
					left: left
				});
				setTimeout(() => leave(ev), timeout);
		};
		return {
			store: store,
			enter: enter,
			leave: leave
		}
	}