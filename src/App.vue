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
  <div id="view">
    <!-- <router-view /> -->
    <!-- <WebGl /> -->
    <pre-release />
  </div>
</template>

<script>
// import WebGl from "@/components/WebGl";
import PreRelease from "@/views/PreRelease.vue";

export default {
  name: "App",
  components: {
    PreRelease,
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
  background-color: $white-beige;
  color: $purple;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: $ft-w-regular;
  line-height: 1.5;
}
</style>
