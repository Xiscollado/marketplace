<template>
  <div id="app" class="px-48 relative">
    <notification />
    <title-component class="pt-16"/>
    <router-view/>
  </div>
</template>
<script>
import titleComponent from "@/components/title.component";
import notification from "@/components/notification.component";
export default {
  name: "app",
  components: {titleComponent, notification}
}
</script>
<style lang="scss">
body, html, #app {
  height: 100%;
  min-height:100%;
}
body, html {
  background-color: rgba(0,0,0,0.83);
}
</style>