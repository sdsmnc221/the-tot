<template>
  <div class="popup">
    <div v-html="prompt"></div>
    <p class="button" v-if="confirm && !withInput">
      <img
        alt=""
        :src="`${$store.state.publicPath}images/left-arrow.svg`"
        rel="preload"
      />
      <button class="select" @click="_confirm">
        {{ !!refuse ? $t("scenes.prompts.confirm") : $t("scenes.prompts.ok") }}
      </button>
      <img
        alt=""
        :src="`${$store.state.publicPath}images/right-arrow.svg`"
        rel="preload"
      />
    </p>
    <p class="button" v-if="refuse && !withInput">
      <img
        alt=""
        :src="`${$store.state.publicPath}images/left-arrow.svg`"
        rel="preload"
      />
      <button class="select" @click="_refuse">
        {{ $t("scenes.prompts.refuse") }}
      </button>
      <img
        alt=""
        :src="`${$store.state.publicPath}images/right-arrow.svg`"
        rel="preload"
      />
    </p>
    <div class="input" v-if="withInput">
      <input
        maxlength="8"
        v-model="code"
        type="text"
        :placeholder="$t('scenes.prompts.placeholder')"
      />
      <p v-if="error" class="error">
        {{ $t("scenes.prompts.error") }}
      </p>
      <p class="button">
        <img
          alt=""
          :src="`${$store.state.publicPath}images/left-arrow.svg`"
          rel="preload"
        />
        <button class="select" @click="_submit">
          {{ $t("scenes.prompts.ok") }}
        </button>
        <img
          alt=""
          :src="`${$store.state.publicPath}images/right-arrow.svg`"
          rel="preload"
        />
      </p>
      <p class="button">
        <img
          alt=""
          :src="`${$store.state.publicPath}images/left-arrow.svg`"
          rel="preload"
        />
        <button class="select" @click="_refuse">
          {{ $t("scenes.prompts.refuse") }}
        </button>
        <img
          alt=""
          :src="`${$store.state.publicPath}images/right-arrow.svg`"
          rel="preload"
        />
      </p>
    </div>
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
    confirm: {
      type: Function,
      default: null,
    },
    refuse: {
      type: Function,
      default: null,
    },
    withInput: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      code: "",
      error: false,
    };
  },
  methods: {
    _confirm() {
      this.confirm();
      this.$store.commit("playSound", { soundName: "click" });
    },
    _refuse() {
      this.refuse();
      this.$store.commit("playSound", { soundName: "click" });
    },
    _submit() {
      this.$store.commit("playSound", { soundName: "click" });
      if (this.code.toUpperCase() === this.$store.state.specialCode) {
        this.$store.commit("thisIsSpecial");
        this.confirm();
      } else this.error = true;
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
  z-index: 99;
  overflow: hidden;

  div {
    color: $peach-cloud;
    text-align: left;
    font-size: $font-size-m;
    margin-bottom: 2rem;

    span {
      color: $majestic-magenta;

      &.blink {
        display: inline-block;
        animation: highlight-animation 1s steps(5, start) infinite,
          blink-animation 3.2s linear infinite;
        border: 2px dotted $peach-cloud;
        border-radius: 32px;
        box-shadow: 0 0 32px 16px $majestic-magenta;
        padding: 0.25rem 0.5rem;
        font-size: $font-size-s;
        line-height: $font-size-l;
      }
    }
  }

  div.input {
    input {
      display: inline-block;
      padding: 1rem;
      margin: 1rem auto;
      position: relative;
      text-transform: uppercase;
      color: $majestic-magenta;
      width: 72vw;
      font-size: $font-size-m * 0.75;

      @include pixel-borders(
        $corner-size: 2,
        $border-size: 4px,
        $border-color: $medium-pink
      );
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  p {
    color: $peach-cloud;
    text-align: left;
    font-size: $font-size-m;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.error {
      color: $majestic-magenta;
      text-align: center;
      font-size: $font-size-s;
      margin: 1rem 0;
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
    margin: 1rem;
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
