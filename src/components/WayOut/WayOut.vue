<template>
  <div class="way-out">
    <div class="credits">
      <p>{{ $t("scenes.way-out.credits") }}</p>
      <a target="__blank" :href="$t('scenes.way-out.author.link')">
        {{ $t("scenes.way-out.author.name") }}
      </a>
      <a target="__blank" :href="$t('scenes.way-out.sources.link')">
        {{ $t("scenes.way-out.sources.name") }}
      </a>
    </div>
    <div class="buttons">
      <button @click="back">{{ $t("scenes.way-out.back") }}</button>
      <button @click="restart">{{ $t("scenes.way-out.restart") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WayOut",
  methods: {
    back() {
      this.$store.commit("playSound", { soundName: "click" });
      this.$store.commit("hidePrompt", {
        path: "scenes-wayOut",
      });
    },
    restart() {
      this.$store.commit("playSound", { soundName: "click" });
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.way-out {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;
  padding: 12vw;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      flex-direction: column;
      margin-bottom: 5.6rem;
    }

    p {
      color: $dark-purple;
      background-color: $medium-pink;
      font-size: $font-size-l;
      line-height: 1.25;
      max-width: 900px;
      margin: 3.2rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      text-align: center;
      text-transform: uppercase;

      @include pixel-borders(
        $corner-size: 2,
        $border-size: 4px,
        $border-color: $majestic-magenta,
        $border-inset-color: $peach-cloud
      );
    }

    a,
    button {
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
      color: $peach-cloud;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      text-decoration: none;
      text-align: center;
      padding: 1rem;
      @include pixel-borders(
        $corner-size: 2,
        $border-size: 4px,
        $border-color: $peach-cloud,
        $border-inset-color: $medium-pink
      );
    }

    a {
      width: 64vw;
      position: relative;
      &:first-of-type::after {
        content: "";
        display: block;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 2.2rem;
        background-color: $peach-cloud;
      }
    }

    button {
      &:first-of-type::after {
        content: "";
        display: block;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        height: 4px;
        width: 2.2rem;
        background-color: $peach-cloud;
      }
    }
  }
}
</style>
