import Typewriter from "typewriter-effect/dist/core";

export default {
  data() {
    return {
      lang: this.$i18n.locale,
      showNextButton: false,
      index: 0,
      typewriter: null,
      speed: 0.16,
    };
  },
  computed: {
    hasReachedEndPrompts() {
      return this.index === this.prompts.length - 1;
    },
    hasReachedEndAnswer() {
      return this.aIndex === this.aIndexMax;
    },
  },
  mounted() {
    this.typewriter = new Typewriter(this.$refs.text, {
      delay: this.speed,
    });
    this._type();
  },
  methods: {
    _next() {
      this.$store.commit("playSound", { soundName: "click" });

      if (!this.hasReachedEndPrompts) {
        this.index += 1;
        if (this.$refs.text.textContent.length)
          this.typewriter
            .callFunction(this._toggleNextBtn.bind(this))
            .deleteAll(this.speed / 2)
            .start();
        setTimeout(() => this._type(), 3200);
      }

      if (this.hasReachedEndPrompts && !this.hasReachedEndAnswer) {
        this.aIndex += 1;
        if (this.$refs.text.textContent.length)
          this.typewriter
            .callFunction(this._toggleNextBtn.bind(this))
            .deleteAll(this.speed / 2)
            .start();
        setTimeout(() => this._typeAnswer(), 3200);
      }
    },
    _toggleNextBtn() {
      this.showNextButton = !this.showNextButton;
    },
    _type() {
      this.$store.commit("playSound", {
        soundName: this.audios[this.index] + this.lang,
      });
      this.typewriter
        .typeString(this.$t(this.prompts[this.index]))
        .callFunction(this._toggleNextBtn.bind(this))
        .start();

      if (this.hasReachedEndPrompts) {
        if (this._updateQuestions) this._updateQuestions();
        if (this._updateCTAs) this._updateCTAs();
      }
    },
  },
};
