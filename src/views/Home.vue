<template>
  <div class="home mt-16 flex flex-col">
    <main class="flex flex-row">
      <search-component class="w-1/2" style="height: 55px"/>
      <menu-component class="w-1/2" style="height: 55px"/>
    </main>
    <items-header class="mt-16"/>
    <div class="items mt-4">
      <item v-for="(item, index) in items" :item="item" :key="index" />
    </div>
  </div>
</template>

<script>
import searchComponent from "@/components/search.component";
import menuComponent from "@/components/userMenu.component";
import item from "@/components/item.component";
import itemsHeader from "@/components/itemsHeader.component";
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {searchComponent, menuComponent, item, itemsHeader},
  computed:
    mapState(["items"])
}
</script>
