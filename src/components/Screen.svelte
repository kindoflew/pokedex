<script>
  import { fade } from "svelte/transition";

  export let src;
  export let alt = "";
</script>

<div class="border">
  <div class="dots">
    <div class="dot" />
    <div class="dot" />
  </div>

  <div class="screen">
    {#if src}
      {#key src}
        <img {src} {alt} in:fade={{ delay: 200 }} />
      {/key}
    {:else}
      <div />
    {/if}
  </div>

  <div class="circle" />

  <div class="lines">
    <div class="first line" />
    <div class="middle line" />
    <div class="last line" />
  </div>
</div>

<style>
  .border {
    background-color: white;
    width: 15rem;
    height: 13rem;
    padding: 0;
    border: 1px solid #c5c5c5;
    border-radius: 2px;
    border-bottom-left-radius: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    clip-path: circle(121.1% at 85% 0);
    filter: drop-shadow(2px 2px 0 #d4d4d4);
  }

  .screen {
    background-color: #3a3a3a;
    border-radius: 2px;
    width: 11rem;
    height: 9rem;
  }

  img {
    height: 9rem;
    width: 9rem;
    margin: 0 auto;
    display: block;
    border: none;
  }

  img:-moz-loading {
    color: transparent;
  }

  .dots {
    width: 4rem;
    height: 2rem;
    position: absolute;
    top: 0.6rem;
    display: flex;
    justify-content: space-between;
  }

  .dot {
    border-radius: 100%;
    background-color: var(--red);
    height: 0.7rem;
    width: 0.7rem;
  }

  .circle {
    border-radius: 100%;
    background-color: var(--red);
    height: 0.9rem;
    width: 0.9rem;
    position: absolute;
    bottom: 0.6rem;
    left: 1.8rem;
  }

  .screen,
  .dot,
  .circle {
    border: 1px solid black;
  }

  .lines {
    position: absolute;
    bottom: 0.4rem;
    right: 2rem;
    height: 1rem;
    width: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .line {
    height: 0.33rem;
  }

  .first,
  .middle {
    border-top: 1px solid black;
  }

  .middle,
  .last {
    border-bottom: 1px solid black;
  }
</style>
