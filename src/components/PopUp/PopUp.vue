<template>
  <div class="popup">
    <p v-html="prompt"></p>
    <p class="button">
      <img alt="" :src="`${$store.state.publicPath}images/left-arrow.svg`" />
      <button class="select" @click="valid">OK</button>
      <img alt="" :src="`${$store.state.publicPath}images/right-arrow.svg`" />
    </p>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    prompt: {
      type: String,
      required: false,
    },
    valid: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparentize($dark-purple, 0.2);
  backdrop-filter: blur(3.2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3.2rem;

  p {
    color: $peach-cloud;
    text-align: left;
    font-size: $font-size-m;

    &:not(:first-child) {
      margin-top: 1rem;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      color: $majestic-magenta;
    }
  }

  button {
    background-color: $peach-cloud;
    color: $majestic-magenta;
    font-size: $font-size-l;
    text-transform: uppercase;
    margin-top: 1rem;
    opacity: 1;
    padding: 0.5rem;
    margin: 2rem;
    width: 32vw;

    @include pixel-borders(
      $corner-size: 2,
      $border-size: 4px,
      $border-color: $medium-pink
    );
  }

  img {
    width: 2rem;
    height: 2rem;
    animation: blink-animation 1s steps(5, start) infinite;
  }
}
</style>
