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
    --inputFontSize: 16px;
  }

  body {
    background-color: var(--bg);
    font-family: monospace;
    overflow-x: hidden;
  }

  li,
  .listItem,
  .selectContainer {
    text-transform: capitalize;
  }

  .listItem,
  .selectedItem {
    font-size: var(--inputFontSize);
  }

  ul {
    list-style: none;
  }
</style>
