# svelte-tooltip
Svelte tooltip for buttons or any other elements

Install
npm i https://github.com/kkibria/svelte-tooltip.git
How to use in svelte source,
```html
<script>
	import { fade } from 'svelte/transition';
	import { tooltip } from './tooltip.js';
	
	let tooltip_obj = tooltip();
	let tooltip_store = tooltip_obj.store;
</script>
<style>
	.tooltip {
		position: fixed; 
		text-align: left;
		max-width: 10em;
		padding: 3px;
		border: 1px solid gray;
	}
</style>
<div style="display: inline-block;" >
	<button on:mouseover={tooltip_obj.enter} on:mouseout={tooltip_obj.leave} tooltip="Press the button to get 1s done">Button 1s</button>
	{#if $tooltip_store.text.length}
		<span class="tooltip" transition:fade style="top: {$tooltip_store.top}px; left: {$tooltip_store.left}px;">
			{$tooltip_store.text}
		</span>
	{/if}
</div>
```
