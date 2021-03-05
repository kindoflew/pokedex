<script>
  import { searchPokemon } from "../api/fetchData.js";
  import { data } from "../api/data.js";
  import Select from "svelte-select";
  import Lights from "./Lights.svelte";
  import EmptySpace from "./EmptySpace.svelte";
  import Buttons from "./Buttons.svelte";
  import Screen from "./Screen.svelte";
  import Info from "./Info.svelte";
  import Matchups from "./Matchups.svelte";
  import BaseStats from "./BaseStats.svelte";

  let pokemon = {
    name: "",
    sprite: "",
    info: {
      height: "",
      weight: "",
    },
    types: [""],
    stats: {
      HP: "",
      ATTACK: "",
      DEFENSE: "",
      SATTACK: "",
      SDEFENSE: "",
      SPEED: "",
    },
    matchups: {},
  };

  let blink = false;

  async function handleSelect(event) {
    blink = true;
    pokemon = await searchPokemon(event.detail.value);
  }
</script>

<main>
  <div class="select-wrapper">
    <Select
      items={data}
      on:select={handleSelect}
      placeholder="Enter Pokemon here..."
    />
  </div>
  <div class="pokedex">
    <div class="left">
      <Lights bind:blink />
      <div class="screen-info">
        <Screen src={pokemon.sprite} alt={pokemon.name} />
        <Info types={pokemon.types} info={pokemon.info} />
      </div>
    </div>
    <div class="middle">
      <div class="line one" />
      <div class="line two" />
    </div>
    <div class="right">
      <EmptySpace />
      <div class="matchups-stats">
        <Matchups matchups={pokemon.matchups} />
        <BaseStats stats={pokemon.stats} />
      </div>
      <Buttons />
    </div>
  </div>
</main>

<style>
  main {
    padding: 0.5rem 2rem;
  }

  .select-wrapper {
    width: 20rem;
    margin: 1rem auto 2rem;
  }

  .pokedex {
    display: flex;
    margin: 1rem auto;
    border-radius: 4px;
    width: 46rem;
    height: 30rem;
    position: relative;
  }

  .pokedex:after {
    content: "";
    height: 23rem;
    width: 46rem;
    position: absolute;
    top: 7rem;
    z-index: -1;
    border-bottom-right-radius: 4px;
    box-shadow: 5px 5px 5px gray;
  }

  .left,
  .right {
    background-color: var(--red);
    width: 22rem;
    position: relative;
  }

  .left {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .right {
    border-bottom-right-radius: 4px;
  }

  .screen-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 25rem;
    margin-top: 2rem;
  }

  .matchups-stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4rem;
  }

  .middle {
    background-color: var(--red);
    width: 2.5rem;
    height: 26.5rem;
    align-self: flex-end;
    border: 1px solid #a00000;
    position: relative;
  }

  .middle:after {
    content: "";
    width: 0.8rem;
    height: 26.5rem;
    background-color: rgba(255, 166, 166, 0.384);
    position: absolute;
    top: 0;
    left: 0.5rem;
  }

  .line {
    border-top: 1.5px solid black;
    width: 4rem;
    position: absolute;
  }

  .one {
    top: 2rem;
  }

  .two {
    bottom: 2rem;
  }
</style>
