<template>
  <div class="sort flex flex-col justify-between">
    <div class="arrow arrow-up cursor-pointer" @click="sort('ASC')"/>
    <div class="arrow arrow-down cursor-pointer" @click="sort('DESC')"/>
  </div>
</template>
<script>
export default {
  name: "sort",
  props: ["name"],
  methods: {
    sort(type) {
      this.$store.dispatch("SET_SORT", this.name, type)
    },
  }
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