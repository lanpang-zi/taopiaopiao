<template>
   <div>
     <router-view></router-view>
       

     <van-tabbar v-model="active" >
     <van-tabbar-item icon="hot" to="/films">热映</van-tabbar-item>
     <van-tabbar-item icon="video" dot to="/cinemas">影院</van-tabbar-item>
     <van-tabbar-item icon="friends-o" info="5" to="/center">我的</van-tabbar-item>
    
     </van-tabbar>
   </div>
</template>


<script>
export default {
   data() {
    return {
      active: 0
    }
  },
  methods: {
    

  }
}
</script>


