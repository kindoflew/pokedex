<div>
  <div class="top" />
  <div class="bottom"/>
</div>

<style>
  div {
    height: 6.5rem;
    width: 22rem;
    position: relative;
  }

  .top,
  .bottom {
    background-color: var(--bg);
  }

  .top {
    height: 3.5rem;
    margin-bottom: -1px;
  }

  .bottom {
    height: 3rem;
    margin-top: -1px;
    clip-path: polygon(33% 0, 100% 0, 100% 100%, 49% 100%);
  }
</style>