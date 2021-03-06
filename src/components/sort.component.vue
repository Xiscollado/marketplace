<template>
  <div class="sort flex flex-col justify-between">
    <div class="arrow arrow-up cursor-pointer" />
    <div class="arrow arrow-down cursor-pointer" />
  </div>
</template>
<script>
export default {
  name: "sort"
}
</script>
<style lang="scss" scoped>
.arrow {
  width: 10px;
  height: 10px;
}
.arrow-up {
  background-image: url("../assets/images/arrow.png");
}
.arrow-down {
  background-image: url("../assets/images/arrow.png");
  transform: rotate(180deg);
}
</style>