<template>
  <header>
    <h1 class="text-5xl m-0 text-white">Bienvenido al mercado de <span class="text-red-500">{{$store.state.marketplace}}</span></h1>
    <h2 class="m-0 text-2xl text-white">Aquí puede comprar y vender a otros ciudadanos</h2>
  </header>
</template>
<style lang="scss" scoped>
h1, h2 {
  font-family: "cr", serif;
}
</style>