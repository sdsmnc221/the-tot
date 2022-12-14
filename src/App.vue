<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `SITE_NAME`
    }}</template>
    <template v-slot:description="{ content }">{{
      content ? `${content}` : `DESCRIPTION`
    }}</template>
    <template v-slot:author="{ content }">{{
      content ? `${content}` : `AUTHOR`
    }}</template>
  </metainfo>
  <!-- <router-view /> -->
  <!-- <WebGl /> -->
  <main :class="{ '--grainy': $store.state.isMobile }">
    <transition name="fade">
      <lang-selector v-if="!$store.state.langSelected" />
    </transition>
    <transition name="fade">
      <block-desktop
        v-if="$store.state.langSelected && !$store.state.isMobile"
      />
    </transition>
    <transition name="fade">
      <pre-release
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          !$store.state.isLandscape
        "
      />
    </transition>
    <transition name="fade">
      <pre-release-scenes
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          !$store.state.isLandscape &&
          $store.state.enterXP
        "
      />
    </transition>
    <transition name="fade">
      <block-landscape
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          $store.state.isLandscape
        "
      />
    </transition>
    <transition name="fade">
      <pre-load v-if="$store.state.loading" />
    </transition>
  </main>
</template>

<script>
// import WebGl from "@/components/WebGl";
import PreLoad from "./views/PreLoad.vue";
import PreRelease from "@/views/PreRelease.vue";
import LangSelector from "@/views/LangSelector.vue";
import BlockDesktop from "@/views/BlockDesktop.vue";
import BlockLandscape from "@/views/BlockLandscape.vue";
import PreReleaseScenes from "@/views/PreReleaseScenes.vue";
import Resources from "./webgl/Utils/Resources";
import sources from "@/webgl/sources";

export default {
  name: "App",
  components: {
    PreRelease,
    LangSelector,
    BlockDesktop,
    BlockLandscape,
    PreReleaseScenes,
    PreLoad,
  },
  metaInfo() {
    return {
      title: this.$t("meta.title"),
      description: this.$t("meta.description"),
      author: this.$t("meta.author"),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [{ rel: "icon", href: "/favicon.ico" }],
    };
  },
  data() {
    return {
      resources: new Resources(sources, this.$store),
    };
  },
  mounted() {
    this.$store.dispatch("saveTicketId");
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("resourcesIsReady", () => {
      this.$store.commit("soundsLoaded", { sounds: this.resources.audios });
    });
  },
  methods: {
    resize() {
      this.$store.commit("resize", {
        isMobile:
          /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        isLandscape: window.innerWidth > window.innerHeight,
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;

    > div {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &.--grainy {
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(('./assets/images/grain.jpeg'));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 99;
        pointer-events: none;
        mix-blend-mode: multiply;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: soft-light;
        background-attachment: fixed;
        background-image: linear-gradient(
          180deg,
          #3c5e6d 0%,
          #f4310e,
          #f58308 80%,
          black
        );
        background-size: 120% 120%;
        background-repeat: no-repeat;
        z-index: 999;
        opacity: 0.72;
        pointer-events: none;
        animation: gradient-animation 3.2s ease infinite both;
      }
    }
  }
}
</style>
