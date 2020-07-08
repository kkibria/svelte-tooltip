<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tooltip = "";
  export let handler = {
    enter: () => {},
    leave: () => {},
  };
  export let style = "";
</script>

<button {style}
  on:mouseover={handler.enter}
  on:mouseout={handler.leave}
  on:click={() => {
    handler.leave();
    dispatch('click');
  }}
  {tooltip}>
  <slot>
    <em>TooltipButton</em>
  </slot>
</button>
