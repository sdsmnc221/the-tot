<template>
  <div class="hotspot">
    <p v-if="displayText">Click here</p>
  </div>
</template>

<script>
export default {
  name: "HotSpot",
  props: {
    displayText: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.hotspot {
  width: 48px;
  height: 24px;
  transform: translate(132vw, 132vh);
  border: 2px dotted $peach-cloud;
  box-shadow: 0 0 32px 16px $majestic-magenta;
  animation: highlight-animation 1s steps(5, start) infinite,
    blink-animation 3.2s linear infinite;
  opacity: 0;
  border-radius: 48px;
  position: fixed;
  mix-blend-mode: hard-light;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size-s/2;
  color: $peach-cloud;
}
</style>
