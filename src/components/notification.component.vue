<template>
  <transition name="bounce">
    <div class="notification flex flex-row" v-show="$store.state.notification.show">
      <div class="symbol">
        <img v-if="$store.state.notification.type === 'ok'" src="../assets/images/notification_OK.png" alt="OK">
        <img v-if="$store.state.notification.type === 'ko'" src="../assets/images/notification_KO.png" alt="KO">
      </div>
      <div class="message font-bold text-lg">
        {{ $store.state.notification.message }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "notification"
}
</script>
<style lang="scss" scoped>
.message {
  width:512px;
  height:128px;
  background-image: url("../assets/images/notification.png");
  padding: 20px 30px;
}
.notification {
  position: fixed;
  top:20px;
  left:20px;
}
</style>