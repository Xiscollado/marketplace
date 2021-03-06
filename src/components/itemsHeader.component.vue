<template>
  <div class="items-header w-full text-white text-xl flex flex-row">
    <p class="w-1/12 pl-2"></p>
    <p class="w-3/12 pl-3">Mercancía</p>
    <p class="w-3/12 pl-3">Vendedor</p>
    <p class="w-1/12 pl-1 flex flex-row pr-2"><span class="flex-grow">Precio</span><sort name="price"/></p>
    <p class="w-1/12 pl-1 flex flex-row pr-2"><span class="flex-grow">Cantidad</span><sort name="quantity"/></p>
  </div>
</template>
<script>
import sort from "@/components/sort.component";
export default {
  name: "items-header",
  components: { sort }
}
</script>
<style lang="scss" scoped>
p {
  @apply ml-1;
  font-family: "cr", serif;
}
</style>