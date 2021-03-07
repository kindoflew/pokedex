<script>
  export let blink = false;

  $: if(blink) handleBlink();

  let animationDuration = 1500;

  function handleBlink() {
    setTimeout(function () {
      blink = false;
    }, animationDuration);
  }
</script>

<div class="lights">
  <div class="top" />

  <div class="circle" class:blink />

  <div class="dots">
    <div class="dot red" class:blink />
    <div class="dot yellow" class:blink />
    <div class="dot green" class:blink />
  </div>

  <div class="bottom" />
</div>

<style>
  .lights {
    width: 100%;
    height: 6.5rem;
    position: relative;
    filter: drop-shadow(2px 2px 2px #ad2121);
  }

  .top,
  .bottom {
    background-color: var(--red);
  }

  .top {
    height: 3.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .bottom {
    height: 3rem;
    clip-path: polygon(0 0, 67% 0, 51% 100%, 0% 100%);
  }

  .circle {
    border-radius: 100%;
    position: absolute;
    top: 1rem;
    left: 1rem;
    border: 3px solid white;
    box-shadow: 0.5px 0 0 3px black;
    z-index: 2;
    height: 4rem;
    width: 4rem;
    background-color: #0090e4;
  }

  .circle:after {
    content: "";
    border-radius: 100%;
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    height: 2rem;
    width: 2rem;
    background-color: rgba(78, 184, 245, 0.877);
  }

  .circle:before {
    content: "";
    border-radius: 100%;
    position: absolute;
    z-index: 3;
    top: 0.5rem;
    left: 0.8rem;
    height: 1rem;
    width: 1rem;
    background-color: rgba(196, 222, 238, 0.808);
  }

  .dots {
    display: flex;
    justify-content: space-between;
    width: 4.5rem;
    z-index: 2;
    position: absolute;
    top: 0.7rem;
    left: 8rem;
  }

  .dot {
    border-radius: 100%;
    height: 0.75rem;
    width: 0.75rem;
    border: 1.5px solid black;
    position: relative;
  }

  .dot:after {
    content: "";
    height: 6px;
    width: 6px;
    border-radius: 100%;
    position: absolute;
    top: 1px;
    left: 1px;
  }

  .red {
    background-color: red;
  }

  .red:after {
    background-color: rgba(255, 190, 190, 0.918);
  }

  .yellow {
    background-color: yellow;
  }

  .yellow:after {
    background-color: rgba(255, 255, 190, 0.918);
  }

  .green {
    background-color: green;
  }

  .green:after {
    background-color: rgba(140, 190, 140, 0.918);
  }

  @keyframes blink {
		from {
			filter: brightness(100%);
		}
		50% {
			filter: brightness(150%);
		}
		to {
			filter: brightness(100%);
		}
	}
	
	.blink {
		animation-name: blink;
		animation-iteration-count: 3;
		animation-duration: 0.5s;
	}
</style>
