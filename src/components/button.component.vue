<template>
  <button class="font-black text-center buttons focus:outline-none hover:text-red-500 px-2">
    <slot/>
  </button>
</template>
<script>
export default {
  name: "button-component"
}
</script>
<style lang="scss" scoped>
button {
  background-image: url("../assets/images/white_bg.png");
  background-size: contain;
}

</style>