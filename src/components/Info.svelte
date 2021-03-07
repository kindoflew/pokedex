<script>
  export let types;
  export let info;
</script>

<div class="container">
  <div>
    <div class="round-button" />
  </div>
  <div>
    <div class="buttons">
      <div class="red" />
      <div class="blue" />
    </div>
    <ul>
      {#if types && info.height && info.weight}
        {#if types.length === 2}
          <li>{types[0]} / {types[1]}</li>
        {:else}
          <li>{types[0]}</li>
        {/if}

        <li>Height: {info.height}m</li>
        <li>Weight: {info.weight}kg</li>
      {/if}
    </ul>
  </div>
  <div class="dpad" />
</div>

<style>
  .container {
    display: flex;
    width: 19rem;
    margin: 0 auto;
    padding: 0 1rem 1rem;
    justify-content: center;
  }

  ul {
    width: 9rem;
    min-height: 2.7rem;
    padding: 0.5rem;
    margin: 1rem;
    border: 1px solid black;
    border-radius: var(--border-radius);
    background-color: #6e8f2c;
    box-shadow: 0 0 5px 2px rgba(52, 68, 21, 0.63) inset;
    font-family: monospace;
  }

  li {
    line-height: 1.2;
  }

  .round-button {
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    background-color: var(--gray);
    border: 1px solid black;
    filter: drop-shadow(2px 0.5px 0 #414141);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 8rem;
    margin: 0 auto;
  }

  .red {
    background-color: #e00000;
  }

  .blue {
    background-color: #02c2c9;
  }

  .red,
  .blue {
    border: 1px solid black;
    border-radius: 2px;
    width: 3rem;
    height: 0.25rem;
  }

  .dpad {
    background: var(--gray);
    height: 5rem;
    position: relative;
    width: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-radius: 2px;
    filter: drop-shadow(2px 2px 0 #414141);
  }

  .dpad:after {
    background: var(--gray);
    content: "";
    height: 1.5rem;
    left: -1.75rem;
    position: absolute;
    top: 1.75rem;
    width: 5rem;
    border-radius: 2px;
  }
</style>
