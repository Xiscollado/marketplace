<template>
  <div class="items">
    <item v-for="(item, index) in curatedItems" :item="item" :key="index" />
  </div>
</template>
<script>
import item from "@/components/item.component";
export default {
  name: "items",
  components: { item },
  props: ["items"],
  computed: {
    curatedItems() {
      let curatedItems = this.items;

      //Filtro de búsqueda
      if (this.$store.state.filters.searchFilter !== "") {
        curatedItems = curatedItems.filter(item => {
          return item.name.toLowerCase().includes(this.$store.state.filters.searchFilter.toLowerCase())
        })
      }

      //Filtro del usuario
      if (this.$store.state.filters.userOffers) {
        curatedItems = curatedItems.filter(item => {
          return item.ownerId === this.$store.state.user.id;
        })
      }

      return curatedItems;
    }
  }
}
</script>