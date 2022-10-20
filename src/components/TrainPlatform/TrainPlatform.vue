<template>
  <div class="train-platform" ref="container">
    <img
      class="img-platform"
      ref="platform"
      alt=""
      :src="`${$store.state.publicPath}images/train-platform.png`"
      rel="preload"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="img-announcement"
      ref="announcement"
      viewBox="0 0 750 1334"
    >
      <defs>
        <clipPath id="a">
          <path style="fill: none" d="M0 0h750v1334H0z" />
        </clipPath>
      </defs>
      <g style="clip-path: url(#a)">
        <path
          style="fill: #f48eb0"
          d="M749.65 456.09 261.62 174.32V-.42l488.03 281.77v174.74z"
        />
        <text
          class="text"
          transform="rotate(32.3 -47.518 565.85)"
          ref="counter"
        >
          <tspan x="0" y="12">
            {{ $t("scenes.platform.counter", { d, h, m }) }}
          </tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "TrainPlatform",

  data() {
    return {
      DOM: {},
      d: 0,
      h: 0,
      m: 0,
      interval: null,
    };
  },
  beforeMount() {
    this.counter();
  },
  mounted() {
    this.setup();
    this.interval = setInterval(() => {
      this.counter();
    }, 1000 * 60);
  },
  methods: {
    setup() {
      this.DOM = {
        container: this.$refs.container,
        platform: this.$refs.platform,
        counter: this.$refs.counter,
        announcement: this.$refs.announcement,
      };

      gsap.set([this.DOM.platform, this.DOM.counter], {
        transformOrigin: "50% 50%",
        opacity: 0,
      });

      gsap.set(this.DOM.counter, {
        skewX: 0,
        skewY: 32,
        rotate: 0,
        scale: 0,
        opacity: 0,
      });

      gsap
        .timeline()
        .addLabel("start", 0)
        .to(
          [this.DOM.announcement, this.DOM.platform],
          {
            y: 0,
            opacity: 1,
            startAt: { y: "50vh", opacity: 0 },
            duration: 4,
            stagger: 0.6,
            ease: "circ.out",
            onStart: () => {
              this.$store.commit("playSound", {
                soundName: "quiet",
              });
              this.$store.commit("playSound", {
                soundName: "tick",
              });
            },
          },
          "start"
        )
        .to(
          this.DOM.counter,
          {
            opacity: 1,

            duration: 3.2,
            scale: 0.88,
            ease: "circ.out",
            delay: 0.6,
          },
          "start"
        )

        .play();
    },
    counter() {
      const now = new Date().getTime();
      const countdownDate = new Date(this.$store.state.release);
      const timeLeft = countdownDate - now;

      this.d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.h = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    },
    showScenePlatform() {
      setTimeout(() => {
        this.$store.commit("showPrompt", { path: "scenes-platform" });
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
.train-platform {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../../assets/images/pre-release-scenes-bg.png");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-platform {
    display: block;
    position: absolute;
    bottom: 0;
    width: auto;
    height: 100%;
  }

  .img-announcement {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    opacity: 0;

    .text {
      fill: #7b4595;
      font-family: VT323-Regular, VT323;
      font-size: 57px;
      letter-spacing: -0.05em;
      text-transform: uppercase;
      animation: hue-animation 3.2s linear both infinite,
        blink-animation 1.2s steps(5, start) both infinite;
    }
  }
}
</style>
