<script>
  import { fade } from "svelte/transition";

  export let matchups;

  let types;
  let normal = {};
  let superEffective = {};
  let resists = {};
  let immune = {};

  let active;

  $: types = Object.keys(matchups);
  $: matchups, sortMatchups();

  function sortMatchups() {
    normal = {};
    superEffective = {};
    resists = {};
    immune = {};

    for (let i = 0; i < types.length; i++) {
      if (matchups[types[i]] === 1) {
        normal[types[i]] = matchups[types[i]];
      }
      if (matchups[types[i]] === 2 || matchups[types[i]] === 4) {
        superEffective[types[i]] = matchups[types[i]];
      }
      if (matchups[types[i]] === 0.5 || matchups[types[i]] === 0.25) {
        resists[types[i]] = matchups[types[i]];
      }
      if (matchups[types[i]] === 0) {
        immune[types[i]] = matchups[types[i]];
      }
    }

    if (types.length) {
      active = normal;
    } 
  }
</script>

<div class="screen">
  {#if types.length}
  <div class="buttons" in:fade>
    <button on:click={() => active = normal } class:active={active === normal}>Normal</button>
    <button on:click={() => active = superEffective } class:active={active === superEffective}>Weakness</button>
    <button on:click={() => active = resists } class:active={active === resists}>Resists</button>
    <button on:click={() => active = immune } class:active={active === immune}>Immune</button>
  </div>
  
    {#key active}
      <ul in:fade>
        {#each Object.keys(active) as type, index (index)}
          <li class="matchups {type}" >
            {type} {active === superEffective || active === resists ? `${active[type]}x` : ''}
          </li>
        {:else}
          <li>None</li>
        {/each}
      </ul>
    {/key}
  {/if}
</div>

<style>
  .screen {
    font-family: monospace;
    border: 1px solid black;
    background-color: #3a3a3a;
    color: white;
    width: 19rem;
    height: 7.5rem;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    border-radius: var(--border-radius);
    padding: 0 0.5rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  button {
    padding: 1px;
    margin-top: 0.2rem;
    font-size: 0.8rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
  
  .active {
    background-color: white;
    color: #3a3a3a;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
    margin-top: 0.5rem;
  }

  li {
    margin: 0.25rem 0.5rem;
  }
</style>
