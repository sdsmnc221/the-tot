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
    <Transition>
      <lang-selector v-if="!$store.state.langSelected" />
    </Transition>
    <Transition name="fade">
      <pre-release v-if="$store.state.langSelected" />
    </Transition>
  </main>
</template>

<script>
// import WebGl from "@/components/WebGl";
import PreRelease from "@/views/PreRelease.vue";
import LangSelector from "@/views/LangSelector.vue";

export default {
  name: "App",
  components: {
    PreRelease,
    LangSelector,
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
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
