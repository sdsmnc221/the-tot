<template>
  <div class="preload" :style="style">
    <div class="container">
      <div v-for="(a, i) in arr" :key="`block-${i}`" class="block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreLoad",
  data() {
    return {
      count: 10,
    };
  },
  mounted() {
    this.count = this.$store.state.isMobile ? 10 : 32;
  },
  computed: {
    arr() {
      return Array(this.count);
    },
    style() {
      const progress = 1 - this.$store.state.percentLoaded;
      return {
        "--block-width": `${this.count}%`,
        "--progress": `${Math.round(progress * 10) / this.count}`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.preload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;

  .container {
    width: 64vw;
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @include pixel-borders(
      $corner-size: 1,
      $border-size: 8px,
      $border-color: $peach-cloud,
      $border-inset-color: $medium-pink
    );

    .block {
      margin: 0 0.2rem;
      background-color: $peach-cloud;
      width: 10%;
      height: 100%;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $dark-purple;
      z-index: 99;
      transform: scaleX(var(--progress));
      transform-origin: center right;
      transition: transform ease 0.24s;
    }
  }
}
</style>
