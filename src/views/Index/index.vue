<template>
   <div>
     <!-- <keep-alive include="film"> -->
     <router-view></router-view>
     <!-- </keep-alive> -->

     <van-tabbar v-model="active">
     <van-tabbar-item icon="home-o">热映</van-tabbar-item>
     <van-tabbar-item icon="search" dot>影院</van-tabbar-item>
     <van-tabbar-item icon="friends-o" info="5">我的</van-tabbar-item>
    
     </van-tabbar>
   </div>
</template>


<script>
export default {
   data() {
    return {
      active: 0
    }
  }
}
</script>
