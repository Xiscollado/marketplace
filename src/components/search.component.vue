<template>
  <div class="search flex flex-row">
    <div class="input-field flex flex-row flex-grow">
      <div class="start-bg item-search"/>
      <label class="flex-grow">
        <input class="item-search focus:outline-none text-white flex-grow" type="text" placeholder="Busque mercancía..."
               v-model="query">
      </label>
      <div class="end-bg item-search"/>
    </div>
    <button-component class="ml-1" @click.native="searchItem">Buscar</button-component>
    <button-component class="ml-4" @click.native="clearSearch">Limpiar búsqueda</button-component>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";

export default {
  name: "search",
  data() {
    return {
      query: ""
    }
  },
  methods: {
    async searchItem() {
      await this.$store.dispatch("SET_LOADING", true);
      await this.$store.dispatch("SET_SEARCH_FILTER", this.query);
      await this.$store.dispatch("SET_LOADING", false);
    },
    async clearSearch() {
      await this.$store.dispatch("SET_LOADING", true);
      this.query = "";
      await this.$store.dispatch("SET_SEARCH_FILTER", "");
      await this.$store.dispatch("SET_LOADING", false);
    }
  },
  components: {buttonComponent}
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