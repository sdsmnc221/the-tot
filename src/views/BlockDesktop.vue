<template>
  <div class="block-desktop">
    <p v-html="$t('noDesktop')" />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;
  padding: 16rem;

  p {
    text-align: center;
    font-size: $font-size-l;

    span {
      color: $majestic-magenta;
    }
  }
}
</style>
