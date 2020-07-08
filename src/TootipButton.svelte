<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let tooltip = "";
  export let handler = {
    enter: () => {},
    leave: () => {},
  };
  export let style = "";
  export let disabled = false;

</script>

<button {style} {disabled}
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
