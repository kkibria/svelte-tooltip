<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tooltip = "tooltip";
  export let handler = {
    enter: () => {},
    leave: () => {},
  };
</script>

<button
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
