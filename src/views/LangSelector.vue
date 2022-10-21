<template>
  <div class="lang-selector">
    <p class="warning">{{ $t("preload") }}</p>
    <button @click="selectLang('en')">
      <img
        :class="{ '--invisible': lang === 'en' }"
        alt=""
        :src="`${$store.state.publicPath}images/left-arrow.svg`"
        rel="preload"
      />
      <span>{{ $t("lang.en") }}</span>
    </button>
    <button @click="selectLang('vn')">
      <img
        :class="{ '--invisible': lang === 'vn' }"
        alt=""
        :src="`${$store.state.publicPath}images/left-arrow.svg`"
        rel="preload"
      />
      <span>{{ $t("lang.vn") }}</span>
    </button>
    <p :class="{ '--invisible': !lang }">
      <img
        :class="{ '--invisible': !lang }"
        alt=""
        :src="`${$store.state.publicPath}images/left-arrow.svg`"
        rel="preload"
      />
      <button class="select" @click="setLocale">
        {{ $t("lang.select") }}
      </button>
      <img
        :class="{ '--invisible': !lang }"
        alt=""
        :src="`${$store.state.publicPath}images/right-arrow.svg`"
        rel="preload"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "LangSelector",
  data() {
    return {
      lang: null,
    };
  },
  methods: {
    selectLang(lang) {
      this.lang = lang;
      this.$store.commit("selectLang", { lang: this.lang });
    },
    setLocale() {
      this.$store.commit("setLocale");
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

  * {
    transition: opacity ease 0.4s;

    &.--invisible {
      visibility: hidden;
      opacity: 0;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    &.warning {
      color: $dark-purple;
      background-color: $medium-pink;
      font-size: clamp(0.9rem, 6vw, 1.2rem);
      line-height: 1.25;
      max-width: 900px;
      margin: 3.2rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      text-align: center;

      @include pixel-borders(
        $corner-size: 2,
        $border-size: 4px,
        $border-color: $majestic-magenta,
        $border-inset-color: $peach-cloud
      );
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    color: $peach-cloud;
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    &:not(.select) {
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
    }

    &.select {
      background-color: $peach-cloud;
      color: $majestic-magenta;
      text-transform: uppercase;
      margin-top: 1rem;
      opacity: 1;
      padding: 0.5rem;
      margin: 1rem;

      @include pixel-borders(
        $corner-size: 2,
        $border-size: 4px,
        $border-color: $medium-pink
      );
    }

    span {
      display: inline-block;
      width: 56vw;
      text-align: center;
      padding: 0.5rem;
      margin: 0.5rem;
    }
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    animation: blink-animation 1s steps(5, start) infinite;
  }

  @media #{$mq-medium} {
    font-size: $font-size-m;
    button {
      &.select {
        display: inline-block;
        text-align: center;
        width: 280px;
        padding: 1rem;
      }
      span {
        width: 320px;
        padding: 1rem;
      }
    }
  }
}
</style>
