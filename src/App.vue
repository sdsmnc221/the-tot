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
  <main>
    <Transition name="fade">
      <lang-selector v-if="!$store.state.langSelected" />
    </Transition>
    <Transition name="fade">
      <block-desktop
        v-if="$store.state.langSelected && !$store.state.isMobile"
      />
    </Transition>
    <Transition name="fade">
      <pre-release
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          !$store.state.isLandscape
        "
      />
    </Transition>
    <Transition name="fade">
      <pre-release-scenes
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          !$store.state.isLandscape &&
          $store.state.enterXP
        "
      />
    </Transition>
    <Transition name="fade">
      <block-landscape
        v-if="
          $store.state.langSelected &&
          $store.state.isMobile &&
          $store.state.isLandscape
        "
      />
    </Transition>
  </main>
</template>

<script>
// import WebGl from "@/components/WebGl";
import PreRelease from "@/views/PreRelease.vue";
import LangSelector from "@/views/LangSelector.vue";
import BlockDesktop from "@/views/BlockDesktop.vue";
import BlockLandscape from "@/views/BlockLandscape.vue";
import PreReleaseScenes from "@/views/PreReleaseScenes.vue";

export default {
  name: "App",
  components: {
    PreRelease,
    LangSelector,
    BlockDesktop,
    BlockLandscape,
    PreReleaseScenes,
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
  mounted() {
    window.addEventListener("resize", () => {
      this.$store.commit("resize", {
        isMobile:
          /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        isLandscape: window.innerWidth > window.innerHeight,
      });
    });
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
