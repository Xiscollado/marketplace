<template>
  <div id="app" class="my-4 px-48">
    <title-component class="mt-8"/>
    <router-view/>
  </div>
</template>
<script>
import titleComponent from "@/components/title.component";
export default {
  name: "app",
  components: {titleComponent}
}
</script>
<style lang="scss">
body {
  background-color: rgba(0,0,0,0.83);
}
</style>