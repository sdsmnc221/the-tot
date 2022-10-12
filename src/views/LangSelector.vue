<template>
  <div class="lang-selector">
    <button @click="selectLang('en')">
      <img alt="" :src="`${$store.state.publicPath}images/left-arrow.svg`" />
      <span>{{ $t("lang.en") }}</span>
    </button>
    <button @click="selectLang('vn')">
      <img alt="" :src="`${$store.state.publicPath}images/left-arrow.svg`" />
      <span>{{ $t("lang.vn") }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "LangSelector",
  methods: {
    selectLang(lang) {
      this.$store.commit("selectLang", { lang });
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;

  button {
    background: none;
    border: none;
    outline: none;
    color: $peach-cloud;
    font-size: $font-size-m;
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    &:active,
    &:hover,
    &:focus {
      color: $majestic-magenta;
      span {
        @include pixel-borders(
          $corner-size: 2,
          $border-size: 4px,
          $border-color: $peach-cloud,
          $border-inset-color: $medium-pink
        );
      }
    }

    span {
      display: inline-block;
      width: 56vw;
      text-align: center;
      padding: 0.5rem;
      margin: 0.5rem;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
      animation: blink-animation 1s steps(5, start) infinite;
    }
  }
}
</style>
