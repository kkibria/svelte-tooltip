import { writable } from 'svelte/store';
	
	export function tooltip(timeout = 8000) {
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
			// let par = ev.target.parentElement.getBoundingClientRect();
			let bb = ev.target.getBoundingClientRect();
			// let top = bb.top - par.top + bb.height + 20 ;
			// let left = bb.left - par.left + bb.width/2 ;
			let top = bb.top + bb.height + 20 ;
			let left = bb.left + bb.width/2 ;
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