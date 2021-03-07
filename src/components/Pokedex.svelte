<script>
  import { searchPokemon } from "../api/fetchData.js";
  import Select from "svelte-select";
  import Lights from "./Lights.svelte";
  import EmptySpace from "./EmptySpace.svelte";
  import Buttons from "./Buttons.svelte";
  import Screen from "./Screen.svelte";
  import Info from "./Info.svelte";
  import Matchups from "./Matchups.svelte";
  import BaseStats from "./BaseStats.svelte";

  let pokemonList = fetchList();

  async function fetchList() {
    let data = await fetch("list.json");
    let res = await data.json();

    return res;
  }

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
    {#await pokemonList then data}
      <Select
        items={data}
        on:select={handleSelect}
        placeholder="Enter Pokemon here..."
      />
    {/await}
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
      <div class="rotate-mobile">
      <div class="matchups-stats">
        <Matchups matchups={pokemon.matchups} />
        <BaseStats stats={pokemon.stats} />
      </div>
      <Buttons />
    </div>
    </div>
  </div>
</main>

<style>
  main {
    padding: 0.5rem 2rem;
  }

  .select-wrapper {
    min-height: 3rem;
    width: 20rem;
    margin: 1rem auto 2rem;
  }

  .pokedex {
    display: flex;
    margin: 1rem auto;
    border-radius: 4px;
    width: 46.5rem;
    height: 30rem;
    position: relative;
  }

  .pokedex:after {
    content: "";
    height: 23rem;
    width: 46.5rem;
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
  }

  .matchups-stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
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

  @media (max-width: 800px) {
    .pokedex {
      flex-direction: column;
      height: 63rem;
      width: 22rem;
    }

    .pokedex:after {
      width: 20rem;
    }

    .middle {
      width: 22rem;
      height: 2.5rem;
    }

    .middle:after {
      width: 22rem;
      height: 0.8rem;
      top: 0.4rem;
      left: 0;
    }

    .line {
      border-top: none;
      border-left: 1px solid black;
      height: 2.5rem;
      width: 1rem;
      top: 0;
      bottom: 0;
    }

    .one {
      left: 2rem;
    }

    .two {
      right: 0.5rem;
    }

    .left,
    .right {
      min-height: 30rem;
    }

    .rotate-mobile,
    .right {
      transform: rotate(180deg);
    }

    .rotate-mobile {
      position: relative;
      bottom: 1rem;
    }
  }

  @media (max-width: 450px) {
    main {
      padding: 0.5rem 0;
    }
  }
</style>
