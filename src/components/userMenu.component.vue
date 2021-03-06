<template>
  <div class="user-menu flex flex-row justify-end">
    <button-component @click.native="myOffers">Mis ofertas</button-component>
    <button-component class="ml-1" @click.native="createOffer">Crear una oferta</button-component>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";
export default {
  name: "user-menu",
  components: { buttonComponent },
  methods: {
    myOffers() {
      console.log("carga mis ofertas")
    },
    createOffer() {
      console.log("crear una oferta")
    }
  }
}
</script>