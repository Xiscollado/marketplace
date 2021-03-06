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
    async myOffers() {
      await this.$store.dispatch("SET_LOADING", true);
      await this.$store.dispatch("TOGGLE_FILTER_USER_OFFERS");
      await this.$store.dispatch("SET_LOADING", false);
    },
    async createOffer() {
      await this.$store.dispatch("SET_LOADING", true);
      // Abre el formulario para crear una oferta
      await this.$router.push({name: "Oferta"});
    },
    async refreshOffers() {
      await this.$store.dispatch("SET_LOADING", true);
      // Hace una petición a la base de datos para refrescar la tabla
      await this.$store.dispatch("DISABLE_ALL_FILTERS");
      //TODO refrescar ofertas de la base de datos. Debería de cachearse el resultado para evitar spamear la BBDD
      await this.$store.dispatch("SET_LOADING", false);
    }
  },
  computed: {
    filterText() {
      return this.$store.state.filters.userOffers ? "Ver todas las ofertas" : "Ver solo mis ofertas"
    }
  }
}
</script>