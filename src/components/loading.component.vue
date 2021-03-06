<template>
  <div class="loading h-full w-full fixed flex items-center justify-center text-white bg-black z-20" v-show="$store.state.loading">
    <transition name="bounce">
      <div class="spinner text-center flex flex-col" v-show="$store.state.loading">
        <svg height="60" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
              </path>
            </g>
          </g>
        </svg>
        <p class="mt-8">Rebuscando en el almacén<br><span class="font-black text-xl">Espera un momento</span></p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "loading"
}
</script>
