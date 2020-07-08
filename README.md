# svelte-tooltip
Svelte tooltip for buttons or any other elements

Install
npm i https://github.com/kkibria/svelte-tooltip.git
How to use in svelte source,
```html
<script>
	import { fade } from 'svelte/transition';
	import { tooltip } from 'kkibria-svelte-tooltip/src/tooltip.js';
	
	let tooltip_obj = tooltip();
	let tooltip_store = tooltip_obj.store;
</script>

<div style="display: inline-block;" >
	<button on:mouseover={tooltip_obj.enter} on:mouseout={tooltip_obj.leave} tooltip="Press the button to get 1s done">Button 1s</button>
	{#if $tooltip_store.text.length}
		<span transition:fade style="position: absolute; top: {$tooltip_store.top}px; left: {$tooltip_store.left}px;">
			{$tooltip_store.text}
		</span>
	{/if}
</div>
```
