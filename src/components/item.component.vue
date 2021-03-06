<template>
  <div class="item flex flex-row">
    <div class="item-table flex flex-row items-center h-20 text-xl w-full">
      <div class="item-field item-icon text-white w-1/12">
        <img :src="icon" :alt="item.name">
      </div>
      <div class="item-field item-name text-white w-3/12">
        {{ item.name }}
      </div>
      <div class="item-field item-owner text-white w-3/12">
        {{ item.owner }}
      </div>
      <div class="item-field item-price text-white w-1/12 flex justify-center">
        {{ item.price }} $
      </div>
      <div class="item-field item-qty text-white w-1/12 flex justify-center">
        {{ item.quantity }}
      </div>
      <button-component class="h-full flex-grow ml-1" @click.native="buyItem(item.id)" v-if="item.ownerId !== $store.state.user.id">Comprar</button-component>
      <button-component class="h-full flex-grow ml-1" @click.native="cancelItem(item.id)" v-if="item.ownerId === $store.state.user.id">Cancelar</button-component>
    </div>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";
export default {
  name: "item",
  components: { buttonComponent },
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    icon() {
      //TODO buscar la imagen correcta en la carpeta items
      return this.item.icon + ".png";
    }
  },
  methods: {
    buyItem(id) {
      //TODO comprar item
      console.log("compra el item: " + id);
    },
    cancelItem(id) {
      //TODO devuelve un item a inventario
      console.log("cancela el item id: " + id);
    }
  }
}
</script>
<style lang="scss" scoped>
.item-field {
  @apply flex items-center h-full px-4;
  background-image: url("../assets/images/black_bg.png");
  background-size: contain;
}
</style>