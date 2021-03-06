<template>
  <div class="user-menu flex flex-row justify-end">
    <button-component @click.native="myOffers">{{ filterText }}</button-component>
    <button-component class="ml-1" @click.native="refreshOffers">Refrescar ofertas</button-component>
    <button-component class="ml-6" @click.native="createOffer">Crear una oferta</button-component>
  </div>
</template>
<script>
import buttonComponent from "@/components/button.component";
export default {
  name: "user-menu",
  components: { buttonComponent },
  methods: {
    myOffers() {
      // Filtra los items por el usuario
      this.$store.dispatch("TOGGLE_FILTER_USER_OFFERS");
    },
    createOffer() {
      // Abre el formulario para crear una oferta
      console.log("crear una oferta")
    },
    refreshOffers() {
      // Hace una petición a la base de datos para refrescar la tabla
      this.$store.dispatch("DISABLE_ALL_FILTERS");
      //TODO refrescar ofertas de la base de datos. Debería de cachearse el resultado para evitar spamear la BBDD
    }
  },
  computed: {
    filterText() {
      return this.$store.state.filters.userOffers ? "Ver todas las ofertas" : "Ver solo mis ofertas"
    }
  }
}
</script>