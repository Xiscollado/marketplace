<template>
  <div class="items">
    <item v-for="(item, index) in curatedItems" :item="item" :key="index"/>
  </div>
</template>
<script>
import item from "@/components/item.component";

export default {
  name: "items",
  components: {item},
  props: ["items"],
  methods: {
    comparePrice(a, b) {
      if (this.$store.state.sorts.price === "ASC")
        return a.price - b.price;
      if (this.$store.state.sorts.price === "DESC")
        return b.price - a.price;
    },
    compareQty(a, b) {
      if (this.$store.state.sorts.quantity === "ASC")
        return a.quantity - b.quantity;
      if (this.$store.state.sorts.quantity === "DESC")
        return b.quantity - a.quantity;
    }
  },
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

      //Ordenar
      if (this.$store.state.sorts.price === "ASC" || this.$store.state.sorts.price === "DESC") {
        curatedItems.sort(this.comparePrice)
      }

      if (this.$store.state.sorts.quantity === "ASC" || this.$store.state.sorts.quantity === "DESC") {
        curatedItems.sort(this.compareQty)
      }

      return curatedItems;
    }
  }
}
</script>