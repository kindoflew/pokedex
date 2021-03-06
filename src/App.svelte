<script>
  import Pokedex from "./components/Pokedex.svelte";
</script>

<Pokedex />

<style global>
  :root {
    --border-radius: 5px;
    --red: #e40101;
    --gray: #2b2b2b;
    --bg: #e4e4e4;
  }

  body {
    background-color: var(--bg);
  }

  input {
    font-size: 1rem;
  }

  li,
  .listItem,
  .selectContainer {
    text-transform: capitalize;
  }

  ul {
    list-style: none;
  }
</style>
