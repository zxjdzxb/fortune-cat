<template>
  <div id="app">
    <router-view/>

  </div>
</template>
<script lang="js">
import store from '@/store/index2'
export default {
  data() {
    return {
      store: store
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body {
  font-family: $font-hei;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
}

</style>
