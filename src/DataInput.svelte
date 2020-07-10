<script>
  import Eye from "./Eye.svelte";

  const LED_RED = "rgb(253, 57, 23)";
  const LED_GREEN = "rgb(94, 228, 77)"

  export let tooltip = "";
  export let handler = {
    enter: () => {},
    leave: () => {},
  };
  export let style = "";
  export let value = "";
  export let password = false;
  export let placeholder = "";
  export let validate;
  export let visibility = false;
  
  let valid = validate(value); 
  function check() {
    if (validate) {
      valid = validate(value);
    }
  }

  function toggle_visibility() {
    visibility = !visibility;
  }
</script>

<style>
  .container {
    position: relative;
    margin-right: -15%;
    flex: 1;
    display: flex;
    user-select: none;
  }

  .container > input {
    flex: calc(100 / 115);
  }

  .container:hover button {
    opacity: 1;
  }

  .container > button {
    position: absolute;
    top: -0.25em;
    right: 0em;
    width: 2.5em;
    height: 100%;
    background: no-repeat 50% 50%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1.5em 1.5em;
    border: none;
    opacity: 0.2;
    transition: opacity 0.2s;
    text-indent: -9999px;
    cursor: pointer;
  }

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .led {
    position: absolute;
    top: -0.2em;
    right: 0.9em;
    height: 0.5em;
    width: 0.5em;
    margin: 2px;
    border-radius: 100%;
    background-color: rgb(253, 57, 23);
  }
  .flash {
    animation: flash 0.3s ease-in-out 0s 4 normal both running;
  }
  .eye {
    position: absolute;
    top: 1.3em;
    right: 0.35em;
    height: 1.5em;
    width: 1.5em;
    margin: 2px;
    opacity: 0.2;
    transition: opacity 0.2s;
  }

  .container:hover .eye {
    opacity: 1;
  }
</style>

<div class="container">
  {#if password && !visibility}
    <input
      type="password"
      {style}
      {tooltip}
      bind:value
      on:keyup={check}
      {placeholder}
      on:mouseover={handler.enter}
      on:mouseout={handler.leave} />

  {:else}
    <input
      type="text"
      {style}
      {tooltip}
      bind:value
      on:keyup={check}
      {placeholder}
      on:mouseover={handler.enter}
      on:mouseout={handler.leave} />
  {/if}
  {#if !!validate}
    {#if valid}
      <div class="led" style="background-color: {LED_GREEN};"></div>
    {:else}
      <div class="led flash" style="background-color: {LED_RED};"></div>
    {/if}
  {/if}
  <button on:click={() => value = ''}>clear</button>
  {#if password}
    <div class="eye" on:click={toggle_visibility} style="cursor: pointer;">
      <Eye state={visibility}/>  
    </div>
  {/if}
</div>
