<script>
  export let stats;
</script>

<table>
  <thead>
    <tr>
      <th scope="col">HP</th>
      <th scope="col">ATK</th>
      <th scope="col">DEF</th>
      <th scope="col">SP ATK</th>
      <th scope="col">SP DEF</th>
      <th scope="col">SPD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{stats.HP}</td>
      <td>{stats.ATTACK}</td>
      <td>{stats.DEFENSE}</td>
      <td>{stats.SATTACK}</td>
      <td>{stats.SDEFENSE}</td>
      <td>{stats.SPEED}</td>
    </tr>
  </tbody>
</table>

<style>
  table {
    background-color: #50e7f1;
    border-radius: var(--border-radius);
    margin: 0 auto;
    font-family: monospace;
    font-size: 1rem;
  }

  th {
    width: 3rem;
  }

  tr {
    height: 3rem;
  }

  td {
    text-align: center;
  }

  th,
  td {
    border: 1px solid #43c1ca;
    box-shadow: 2px 2px 2px rgba(48, 137, 143, 0.733);
  }
  
</style>