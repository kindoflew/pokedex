<div class="buttons">
  <div class="small-rects">
    <div class="small" />
    <div class="small" />
  </div>

  <div class="circle" />

  <div class="squares">
    <div class="square" />
    <div class="square" />
  </div>

  <div class="large-rects">
    <div class="large" />
    <div class="large" />
  </div>
</div>

<style>
  .buttons {
    position: relative;
    height: 8rem;
  }

  .small-rects,
  .large-rects,
  .squares,
  .circle {
    position: absolute;
  }

  .small-rects,
  .large-rects,
  .squares {
    display: flex;
  }

  .small,
  .large {
    background-color: var(--gray);
    border-radius: 2px;
  }

  .small-rects {
    justify-content: space-between;
    width: 6rem;
    height: 0.4rem;
    top: 0.6rem;
    right: 1.2rem;
  }

  .small {
    width: 2.5rem;
    box-shadow: 1px 1px 0 #414141;
  }

  .large-rects {
    justify-content: space-between;
    height: 2rem;
    left: 1.2rem;
    right: 1.2rem;
    bottom: 1.9rem;
  }  

  .large {
    width: 7.5rem;
    box-shadow: 2px 2px 0 #414141;
  }

  .circle {
    border-radius: 100%;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #c79901;
    border: 1px solid black;
    position: absolute;
    right: 1.2rem;
    top: 1.7rem;
  }

  .circle:after {
    content: "";
    border-radius: 100%;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    height: 0.5rem;
    width: 0.5rem;
    background-color: #f5e65fc5;
  }

  .squares {
    width: 5rem;
    height: 1.8rem;
    justify-content: center;
    top: 1rem;
    left: 1rem;
    border-radius: 3px;
    filter: drop-shadow(1px 1px 0 #b8b8b8);
  }

  .square {
    background-color: white;
    height: 1.8rem;
    width: 2.1rem;
    border: 1.5px solid #474747;
  }

  .square:nth-child(1) {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  .square:nth-child(2) {
    border-left: none;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
</style>