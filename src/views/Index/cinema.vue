<template>
  <div class="bd">
    <Topbar></Topbar>
    <Cinemalist></Cinemalist>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Cinemalist from '@/components/Cinemalist.vue'
export default {
  components: {
    Topbar: Topbar,
    Cinemalist: Cinemalist
  }
}
</script>

<style lang="less" scoped>
.bd{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  width: 100%;
}
</style>
