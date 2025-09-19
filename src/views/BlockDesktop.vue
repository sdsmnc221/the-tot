<template>
  <div class="block-desktop">
    <p v-html="$t('noDesktop')" />
    <a :href="$store.state.site">
      <img
        alt="QR Code The Trains of Thoughts"
        :src="`${$store.state.publicPath}images/qr-code.png`"
        rel="preload"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "BlockDesktop",
};
</script>

<style lang="scss">
.block-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;
  padding: 16rem;
  z-index: 99;

  p {
    text-align: center;
    font-size: $font-size-l;

    span {
      color: $majestic-magenta;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;

    img {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
