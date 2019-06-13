<template>
  <div>
    <van-tabs v-model="active" title-active-color="red">
      <van-tab title="优惠劵">
        <div class="content">
          <div class="ticket-add">
          <router-link to="/redeem" class="add">添加优惠券</router-link>

          </div> 
        </div>
        
      </van-tab>
      <van-tab title="其他优惠劵">
        <div class="content">
          <div class="no-coupon">
           <i class="no-coupon-icon"></i>
           <p>没有更多优惠劵</p>

          </div>

        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  
}
</script>


<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';
   html,body{
     background:#f5f5f5;
   }
  .content{
    width:100%;
    height:676px;
    background:#f5f5f5;
    opacity:0.5;

    .no-coupon{
      width:100%;
      height:160px;
      padding-top:160px;

      .no-coupon-icon{
        display: block;
        margin: 0 auto;
        width: 132px;
        height: 132px;
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url( ../../assets/icon.png);

      }
      p{
        display:block;
        width:100%;
        height:28px;
        line-height:28px;
        text-align: center
      }
    }
    .ticket-add{
    width:100%;
    height:50px;
    background:#fff;
    overflow: hidden;
    
    .add{
      display:block;
      width:100px;
      height:30px;
      line-height:30px;
      color:#2ea2f4;
      text-align: center;
      font-size:16px;
      margin:10px 0 0 300px;
    }
  }
  }
  

</style>




