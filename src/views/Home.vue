<template>
  <div class="home mt-16 flex flex-col">
    <main class="flex flex-row">
      <search-component class="w-1/2" style="height: 55px"/>
      <menu-component class="w-1/2" style="height: 55px"/>
    </main>
    <items-header class="mt-16"/>
    <items :items="items" class="mt-4" />
  </div>
</template>

<script>
import searchComponent from "@/components/search.component";
import menuComponent from "@/components/userMenu.component";
import items from "@/components/items.component";
import itemsHeader from "@/components/itemsHeader.component";
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {searchComponent, menuComponent, items, itemsHeader},
  computed:
    mapState(["items"]),
  async created() {
    //TODO ELIMINAR, pedirlos a la BBDD
    let items = [
      {id: 1, name: "clavos", icon: "nail", owner: "Dakota Jack", price: 3, quantity: 10, ownerId: "ABC"},
      {id: 2, name: "clavos", icon: "nail", owner: "Silvestre Dalton", price: 3, quantity: 10, ownerId: "EFG"},
      {id: 3, name: "Puro", icon: "puro", owner: "Silvestre Dalton", price: 1, quantity: 20, ownerId: "EFG"},
      {id: 4, name: "Estandarte de campamento", icon: "flag", owner: "Kimberlee Cat", price: 1, quantity: 20, ownerId: "GTF"},
    ]
    //TODO ELIMINAR, pedirlos a la BBDD
    await this.$store.dispatch("SET_ITEMS", items) //TODO LLAMAR DESDE RDR, eliminar
  },
  mounted() {
    this.$store.dispatch("SET_LOADING", false)
  }
}
</script>
