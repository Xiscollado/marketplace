<template>
  <div class="search flex flex-row">
    <div class="input-field flex flex-row flex-grow">
      <div class="start-bg item-search"/>
      <label class="flex-grow">
        <input class="item-search focus:outline-none text-white flex-grow" type="text" placeholder="Busque mercancía..."
               v-model="item">
      </label>
      <div class="end-bg item-search"/>
    </div>
  <button-component class="ml-1" style="height: 100%" @click.native="searchItem">Buscar</button-component>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";
export default {
  name: "search",
  data() {
    return {
      item: ""
    }
  },
  methods: {
    searchItem() {
      console.log("enviar a RDR el item a buscar");
    }
  },
  components: { buttonComponent }
}
</script>
<style lang="scss" scoped>
.item-search {
  height: 100%;
  background-color: black;
}

.start-bg, .end-bg {
  width: 26px;
}

.start-bg {
  background-image: url("../assets/images/search_left_border.png");
}

.end-bg {
  background-image: url("../assets/images/search_right_border.png");
}

label, input {
  background-image: url("../assets/images/search_bg.png");
  background-color: black;
}
</style>