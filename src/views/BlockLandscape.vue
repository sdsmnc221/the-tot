<template>
  <div class="block-landscape">
    <p v-html="$t('noLandscape')" />
  </div>
</template>

<script>
export default {
  name: "BlockLandscape",
};
</script>

<style lang="scss">
.block-landscape {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $dark-purple;
  padding: 3.2rem;
  z-index: 999;

  p {
    text-align: center;
    font-size: $font-size-l;

    span {
      color: $majestic-magenta;
    }
  }
}
</style>
