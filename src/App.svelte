<script>
  import { fade } from "svelte/transition";
  import { tooltip } from "./tooltip.js";
  import TtipBtn from "./TtipBtn.svelte";

  let tt = tooltip();
  let tt_store = tt.store;
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

<div style="display: inline-block;">
  <button
    on:mouseover={tt.enter}
    on:mouseout={tt.leave}
    tooltip="Press the button to get 1s done">
    Button 1s
  </button>
  <button
    on:mouseover={tt.enter}
    on:mouseout={tt.leave}
    tooltip="Press the button to get 2s done">
    Button 2s
  </button>

  <TtipBtn
    handler={tt}
    tooltip="Press the TtipBtn1 button to get 1 done"
    on:click={() => {
      console.log('TtipBtn1 clicked');
    }}>
    TtipBtn1
  </TtipBtn>

  {#if $tt_store.text.length}
    <span
      class="tooltip"
      transition:fade
      style="top: {$tt_store.top}px; left: {$tt_store.left}px;">
      {$tt_store.text}
    </span>
  {/if}
</div>
