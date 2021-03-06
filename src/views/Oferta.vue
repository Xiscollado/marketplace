<template>
  <div class="oferta text-white">
    <header class="pt-8">
      <h1 class="font-black text-2xl">Ponga un artículo a la venta</h1>
    </header>
    <div class="formulario mt-8 flex flex-col w-2/4">
      <label>
        <p>Seleccione un artículo de su inventario</p>
        <select v-model="name" class="w-full">
          <option value="0">Seleccione un artículo de su inventario</option>
          <option v-for="item in items" :value="item.name" :key="item.label">{{ item.label }} ({{ item.qty }})</option>
        </select>
      </label>
      <div class="numbers flex flex-row">
        <label class="w-1/2">
          <p>Cantidad</p>
          <input type="number" v-model="quantity" placeholder="Cantidad" class="w-full">
        </label>
        <label class="w-1/2">
          <p>Precio</p>
          <input type="number" v-model="price" placeholder="Precio" class="ml-1 w-full">
        </label>
      </div>
      <button-component class="text-black button mt-4" @click.native="sell">Poner en venta</button-component>
      <button-component class="text-black button mt-4" @click.native="cancel">Cancelar</button-component>
    </div>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";
import {mapState} from "vuex"

export default {
  name: "oferta",
  data() {
    return {
      name: "0",
      quantity: 1,
      price: 0
    }
  },
  components: {buttonComponent},
  async mounted() {
    await this.$store.dispatch("SET_LOADING", false);
  },
  methods: {
    async sell() {
      this.$store.dispatch("SET_LOADING", true);
      let item = this.items.find(i => {
        return this.name === i.name
      });
      if (this.name === "0" || this.quantity > item.qty || this.quantity < 1 || this.price <= 0) {
        await this.$store.dispatch("SET_LOADING", false);
        let message = "Ha habido un error al vender, inténtalo de nuevo";

        if (this.name === "0") message = "Tiene que poner a la venta algún artículo"
        if (this.quantity > item.qty) message = "No tienes tantos artículos en tu inventario, prueba a vender menos"
        if (this.quantity < 1) message = "Tiene que vender por lo menos un artículo"
        if (this.price <= 0) message = "Tiene que poner un precio a su artículo"

        await this.$store.dispatch("SET_NOTIFICATION", {type:"ko", message, show:true})
      } else {
        await this.$store.dispatch("SET_NOTIFICATION", {type:"ok", message:"Su artículo se ha puesto en venta con éxito", show:true})
        // TODO enviar a BBDD {name: this.name, quantity: this.quantity, price: this.price}
        // TODO await this.$store.dispatch("ADD_ITEM", item)
        await this.$router.push({name: "Home"})
      }
    }
  },
  computed:
      mapState({
        items: state => state.user.inventory
      })
}
</script>
<style lang="scss" scoped>
label {
  @apply mb-4
}

input, select {
  @apply focus:outline-none text-white py-4 px-8 bg-black border border-white mt-4;
}

.button {
  height: 55px;
}
</style>