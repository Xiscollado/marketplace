<template>
  <div class="items">
    <item v-for="(item, index) in curedItems" :item="item" :key="index" />
  </div>
</template>
<script>
import item from "@/components/item.component";
export default {
  name: "items",
  components: { item },
  props: ["items"],
  computed: {
    curedItems() {
      let curedItems = this.items;
      //Filtro de búsqueda
      if (this.$store.state.filters.searchFilter !== "") {
        curedItems = curedItems.filter(item => {
          return item.name.toLowerCase().includes(this.$store.state.filters.searchFilter.toLowerCase())
        })
      }

      //Filtro del usuario
      if (this.$store.state.filters.userOffers) {
        curedItems = curedItems.filter(item => {
          return item.ownerId === this.$store.state.user.id;
        })
      }

      return curedItems;
    }
  }
}
</script>