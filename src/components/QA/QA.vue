<template>
  <div class="q-a">
    <button class="prevnext" @click="_back">
      <img
        alt=""
        :src="`${$store.state.publicPath}images/right-arrow.svg`"
        rel="preload"
      />
    </button>
    <img
      class="img-controller"
      alt=""
      :src="`${$store.state.publicPath}images/controller.png`"
      rel="preload"
    />
    <div class="bubble-chat">
      <p ref="text"></p>
      <transition name="fade">
        <button
          v-if="
            showNextButton && (!hasReachedEndPrompts || !hasReachedEndAnswer)
          "
          @click="_next"
          class="prevnext"
        >
          <img
            alt=""
            :src="`${$store.state.publicPath}images/left-arrow.svg`"
            rel="preload"
          />
        </button>
      </transition>
    </div>

    <!-- <transition name="fade"> -->
    <transition-group
      tag="div"
      name="slide-in"
      :style="{ '--total': questions.length }"
      class="questions"
    >
      <p
        class="button"
        v-for="(a, i) in questions"
        :key="`button-question-${i}`"
        :style="{ '--i': i }"
      >
        <img
          alt=""
          :src="`${$store.state.publicPath}images/left-arrow.svg`"
          rel="preload"
        />
        <button class="select" @click="_confirmQuestion(i)" v-html="$t(a)" />
        <img
          alt=""
          :src="`${$store.state.publicPath}images/right-arrow.svg`"
          rel="preload"
        />
      </p>
    </transition-group>
    <!-- </transition> -->
  </div>
</template>

<script>
import counterMx from "@/mixins/counter";
import typerMx from "@/mixins/typer";

export default {
  name: "QA",
  mixins: [counterMx, typerMx],
  data() {
    return {
      questions: [],
      prompts: [
        "scenes.prompts.talk.introduction",
        "scenes.prompts.talk.counter",
        "scenes.prompts.talk.ask-away",
      ],
      audios: ["promptIntroduction", "promptCounter", "promptAskAway"],
      qa: {
        1: 3,
        2: 4,
        3: 3,
      },
      qIndexMax: 3,
      qIndex: 0,
      aIndex: 3,
      aIndexMax: 3,
    };
  },
  mounted() {
    this.$store.commit("stopSound", { soundName: "quiet" });
    this.$store.commit("stopSound", { soundName: "tick" });
  },
  unmounted() {
    this.$store.commit("playSound", { soundName: "quiet" });
    this.$store.commit("playSound", { soundName: "tick" });
  },
  methods: {
    _updateQuestions() {
      ["", "", ""].forEach((a, i) =>
        setTimeout(() => {
          this.questions.push(`scenes.prompts.talk.qa.q${i + 1}.question`);
          setTimeout(
            () =>
              this.$store.commit("playSound", { soundName: "notification" }),
            160 * i
          );
        }, 1600 * i)
      );
    },
    _confirmQuestion(index) {
      this.$store.commit("playSound", { soundName: "click" });
      this.qIndex = index + 1;
      this.aIndexMax = this.qa[this.qIndex];
      this.aIndex = 1;
      if (this.$refs.text.textContent.length)
        this.typewriter
          .callFunction(this._toggleNextBtn.bind(this))
          .deleteAll(this.speed / 2)
          .start();
      setTimeout(() => this._typeAnswer(), 3200);
    },
    _typeAnswer() {
      this.$store.commit("playSound", {
        soundName: `qaQ${this.qIndex}A${this.aIndex}${this.lang}`,
      });
      if (this.qIndex === 3 && this.aIndex === 1) this.counter();

      this.typewriter
        .typeString(
          this.$t(
            `scenes.prompts.talk.qa.q${this.qIndex}.answer.a${this.aIndex}`,
            { d: this.d, h: this.h, m: this.m }
          )
        )
        .callFunction(this._toggleNextBtn.bind(this))
        .start();
    },
    _back() {
      this.$store.commit("playSound", { soundName: "click" });
      this.$store.commit("hidePrompt", {
        path: "scenes-qa",
      });
    },
  },
};
</script>

<style lang="scss">
.q-a {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparentize($dark-purple, 0.2);
  backdrop-filter: blur(3.2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 48vh;
  z-index: 99;

  .img-controller {
    position: absolute;
    width: 50vw;
    height: auto;
    bottom: -18vh;
    right: 12vw;
    pointer-events: none;
  }

  .bubble-chat {
    position: fixed;
    width: 84vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: $medium-pink;
    color: darken($majestic-magenta, 32%);
    text-align: left;
    font-size: $font-size-m;
    margin-bottom: 2rem;
    padding: 2rem;
    font-size: $font-size-m;

    @include pixel-borders(
      $corner-size: 2,
      $border-size: 8px,
      $border-color: $peach-cloud,
      $border-inset-color: $majestic-magenta
    );

    position: absolute;

    p {
      .Typewriter__cursor {
        color: $majestic-magenta;
      }
    }
  }

  .prevnext {
    display: flex;
    right: 1.2rem;
    bottom: 1.2rem;
    outline: none;
    background-color: $majestic-magenta;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    animation: blink-animation 1s steps(5, start) infinite;

    @include pixel-borders(
      $corner-size: 1,
      $border-size: 3px,
      $border-color: $peach-cloud
    );

    position: absolute;
    border-radius: 32px;
    z-index: 3;

    img {
      width: 16px;
      height: 16px;
    }
  }

  & > .prevnext {
    bottom: auto;
    right: auto;
    top: 1.2rem;
    left: 1.2rem;
    animation: none;
  }

  .questions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 48vh;
    transition: all ease 0.4s;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: $majestic-magenta;
    }

    button {
      background-color: $peach-cloud;
      color: darken($majestic-magenta, 32%);
      font-size: $font-size-m;
      text-transform: uppercase;
      margin-top: 1rem;
      opacity: 1;
      padding: 0.5rem;
      margin: 1rem;
      width: 64vw;

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
}
</style>
