<template>
  <div id="app">
    <spinner/>
    <notification/>
    <title-component class="pt-16 px-48"/>
    <router-view class="px-48"/>
  </div>
</template>
<script>
import titleComponent from "@/components/title.component";
import notification from "@/components/notification.component";
import spinner from "@/components/loading.component";

export default {
  name: "app",
  components: {titleComponent, notification, spinner},
  async created() {
    await this.$store.dispatch("SET_LOADING", true);
    //TODO eliminar
    let user = {
      name: "Dakota Jack", id: "ABC", inventory: [
        {name: "clavos", label: "clavos", quantity: 5},
        {name: "puros", label: "puros", quantity: 2},
      ]
    };
    //TODO eliminar
    await this.$store.dispatch("SET_MARKETPLACE_NAME", "BlackWater")
    await this.$store.dispatch("SET_USER", user) //TODO LLAMAR DESDE RDR, eliminar
  },
  async mounted() {
    await this.$store.dispatch("SET_LOADING", false);
  }
}
</script>
<style lang="scss">
body, html, #app {
  height: 100%;
  min-height: 100%;
}

body, html {
  background-color: rgba(0, 0, 0, 0.83);
}
</style>