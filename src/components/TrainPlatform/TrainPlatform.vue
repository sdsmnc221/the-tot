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
    <img
      class="img-controller"
      ref="controller"
      alt=""
      :src="`${$store.state.publicPath}images/controller.png`"
      rel="preload"
    />
    <img
      class="img-gift"
      ref="gift"
      alt=""
      :src="`${$store.state.publicPath}images/gift.png`"
      rel="preload"
    />
    <img
      class="img-bubble"
      ref="bubble"
      alt=""
      :src="`${$store.state.publicPath}images/bubble.png`"
      rel="preload"
    />
    <hot-spot
      ref="hotspotBubble"
      @click="
        $store.commit('showPrompt', {
          path: 'scenes-qa',
        })
      "
    />
    <hot-spot
      ref="hotspotGift"
      @click="
        $store.commit('showPrompt', {
          path: 'scenes-special',
        })
      "
    />
    <hot-spot
      ref="exit"
      class="exit"
      display-text
      :text-to-display="$t('scenes.platform.exit')"
      @click="showWayOut"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";
import HotSpot from "../HotSpot/HotSpot.vue";
import counterMx from "@/mixins/counter";

export default {
  name: "TrainPlatform",
  components: { HotSpot },
  mixins: [counterMx],
  data() {
    return {
      DOM: {},
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
        controller: this.$refs.controller,
        bubble: this.$refs.bubble,
        hpBubble: this.$refs.hotspotBubble.$el,
        gift: this.$refs.gift,
        hpGift: this.$refs.hotspotGift.$el,
        exit: this.$refs.exit.$el,
      };
      gsap.set(
        [
          this.DOM.platform,
          this.DOM.counter,
          this.DOM.controller,
          this.DOM.bubble,
          this.DOM.hpBubble,
          this.DOM.gift,
        ],
        {
          transformOrigin: "50% 50%",
          opacity: 0,
        }
      );
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
        .to(
          this.DOM.controller,
          {
            opacity: 1,
            left: "16vw",
            top: "22vh",
            startAt: {
              opacity: 0,
              left: "-150vw",
              top: "-12vh",
            },
            duration: 2.4,
            ease: "circ.out",
            onStart: () =>
              setTimeout(
                () => this.$store.commit("playSound", { soundName: "cough" }),
                1200
              ),
            onComplete: () => {
              const { right, top, width, height } =
                this.DOM.controller.getBoundingClientRect();
              gsap.to(this.DOM.bubble, {
                opacity: 1,
                top: top - 64 + "px",
                left: right - 64 + "px",
                startAt: {
                  top: top - 96 + "px",
                  left: right - 96 + "px",
                  opacity: 0,
                },
                duration: 0.8,
                ease: "circ.out",
                onComplete: () => {
                  const { width, height, top, left } =
                    this.DOM.bubble.getBoundingClientRect();
                  gsap.to(this.DOM.hpBubble, {
                    width: width + "px",
                    height: height + "px",
                    x: left + "px",
                    y: top + "px",
                    scale: 0.64,
                    startAt: {
                      x: left + "px",
                      y: top + "px",
                      opacity: 0,
                      scale: 1,
                    },
                    opacity: 1,
                    duration: 0.8,
                    ease: "circ.out",
                  });
                },
              });
              gsap.to(this.DOM.gift, {
                opacity: 1,
                top: top + height / 2 - 32 + "px",
                left: right - width / 2 + 32 + "px",
                width: width / 2 + "px",
                height: width / 2 + "px",
                startAt: {
                  top: top + height / 2 - 32 + "px",
                  left: right - width / 2 + 32 + "px",
                  opacity: 0,
                  width: 0,
                  height: 0,
                },
                duration: 0.8,
                ease: "circ.out",
                onComplete: () => {
                  const { width, height, top, left } =
                    this.DOM.gift.getBoundingClientRect();
                  gsap.to(this.DOM.hpGift, {
                    width: width + "px",
                    height: height + "px",
                    x: left + "px",
                    y: top + "px",
                    scale: 0.64,
                    startAt: {
                      x: left + "px",
                      y: top + "px",
                      opacity: 0,
                      scale: 1,
                    },
                    opacity: 1,
                    duration: 0.8,
                    ease: "circ.out",
                  });
                },
              });
              gsap.to(this.DOM.exit, {
                opacity: 1,
                duration: 3.2,
                ease: "circ.out",
                startAt: { opacity: 0 },
              });
            },
          },
          "start+=6.4"
        )
        .play();
    },
    showScenePlatform() {
      setTimeout(() => {
        this.$store.commit("showPrompt", { path: "scenes-platform" });
      }, 1200);
    },
    showWayOut() {
      this.$store.commit("playSound", { soundName: "click" });
      this.$store.commit("showPrompt", {
        path: "scenes-wayOut",
      });
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

  .img-controller {
    position: absolute;
    height: auto;
    width: 24vw;
  }

  .img-bubble {
    position: absolute;
    width: 16vw;
    height: auto;
  }

  .img-gift {
    position: absolute;
  }

  .hotspot {
    position: absolute;
    top: 0;
    left: 0;
  }

  .img-platform {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
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

  .exit {
    font-family: $font-silkscreen;
    font-size: $font-size-l;
    color: $peach-cloud;
    background-color: $majestic-magenta;
    bottom: 4.8rem;
    top: auto;
    left: 50%;
    width: 12rem;
    height: 4.8rem;
    mix-blend-mode: normal;
    transform: translate(-50%, 0);

    @include pixel-borders(
      $corner-size: 2,
      $border-size: 4px,
      $border-color: transparentize($peach-cloud, 0.48)
    );

    position: absolute;
    border-radius: 2px !important;
  }
}
</style>
