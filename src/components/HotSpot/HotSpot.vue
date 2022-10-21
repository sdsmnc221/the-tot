<template>
  <div
    class="hotspot"
    :class="{ '--with-bg': withBackground }"
    @click="$store.commit('playSound', { soundName: 'click' })"
  >
    <p v-if="displayText">{{ text }}</p>
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
    textToDisplay: {
      type: String,
      default: null,
    },
    withBackground: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    text() {
      return this.textToDisplay || this.$t("hotspot");
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

  &.--with-bg {
    background-color: transparentize($peach-cloud, 0.64);
  }
}
</style>
