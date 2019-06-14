<template>
   <div>
     <!-- <keep-alive include="film"> -->
     <router-view></router-view>


     <van-tabbar v-model="active" >
     <van-tabbar-item icon="hot" to="/films">热映</van-tabbar-item>
     <van-tabbar-item icon="video" dot to="/cinemas">影院</van-tabbar-item>
     <van-tabbar-item icon="friends-o" info="5"  :to="ok ? '/center' : '/login'" >我的</van-tabbar-item>
    
    
     </van-tabbar>
   </div>
</template>


<script>
export default {
   data() {
    return {
      active: 0,
      ok:false
    }
  },
  methods: {
    // fn1(){
    //   console.log(this);
    //   if(window.localStorage.getItem('userInfo')){
    //     this.ok=true,
    //     this.active=2
    //   }else{
    //     this.ok=false
    //   }

    // }
  },
  mounted(){
     if(window.localStorage.getItem('userInfo')){
        this.ok=true,
        this.active=2
      }else{
        this.ok=false
      }

  }
    
  
}
</script>
