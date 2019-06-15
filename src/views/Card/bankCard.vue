<template>
  <div>
    <div class="header">
      <div class="card-info">
        <img src="//gw.alicdn.com/tfs/TB1kuxwmxTpK1RjSZFKXXa2wXXa-330-210.png" alt="">
        <span class="money">余额(元)</span>
        <span class="amount">0.00</span>
        <router-link class="tied-card" to="/card/bank">立即绑卡</router-link>

      </div>
      <div class="card-list">
        <div class="card-item1">
          <router-link to="/question" class="card-question">常见问题</router-link>
          <router-link to="" class="card-t">></router-link>

        </div>
        <router-link to="" class="card-item2">
          <div class=" card-sell">销售热线</div>
          <div class="card-tel">0571-88157838</div>
          <div class="card-b">></div>
        </router-link>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';
.card{
  height:100%;
  background:#e7ebed;
}
.header{
  width:100%;
  height:665px;

  .card-info {
    width:100%;
    height:310px;
    padding:25px;
    box-sizing: border-box;
    background:#fff;

    img{
      display:block;
      width:120px;
      height:80px;
      margin:0 auto;
      margin-bottom:30px;
    }
    .money{
      display:block;
      width:100%;
      height:13px;
      line-height: 13px;
      font-size:12px;
      text-align:center;
      color:#999;
      margin-bottom:10px;
    }
    .amount{
      display:block;
      width:100%;
      height:50px;
      line-height: 50px;
      font-size:50px;
      text-align:center;
      color:#333;
      margin-bottom:20px;

    }
    .tied-card{
      display:block;
      width:100%;
      height:44px;
      line-height: 44px;
      border-radius: 22px;
      margin:0 auto;
      border:0;
      font-weight: 600;
      color:#fff;
      text-align:center;
      background-image: linear-gradient(45deg,#ff798b,#fa445b);
    }
  }
  .card-list{
    width:100%;
    height:120px;
    margin-top:8px;
    overflow: hidden;
  }
  .card-item1{
    width:100%;
    height:60px;
    padding:10px 18px;
    box-sizing: border-box;
    background:#fff;

    .card-question{
      display: inline-block;
      width:60px;
      height:24px;
      line-height: 24px;
      color:#333;
      font-size:14px;
    }
    .card-t{
      display:inline-block;
      width:16px;
      height:30px;
      line-height: 30px;
      color:#ccc;
      font-size:24px;
      opacity:0.6;
      margin:0 0 0 300px
    }
  }
  .card-item2{
    width:100%;
    height:60px;
    padding:10px 18px;
    border-top:2px solid #ccc;
    background:#fff;
    box-sizing: border-box;

    .card-sell{
      display: inline-block;
      width:60px;
      height:24px;
      line-height: 24px;
      color:#333;
      font-size:14px;
    }
    .card-tel{
      display:inline-block;
      width:120px;
      height:24px;
      line-height:24px;
      font-size:14px;
      color:#ccc;
      opacity:0.7;
      text-align:center;
      margin-left:172px;

    }
    .card-b{
      display:inline-block;
      width:16px;
      height:30px;
      line-height: 30px;
      color:#ccc;
      font-size:24px;
      opacity:0.6;
      margin:0 0 0 10px;

      
    }
  }
  
}
.footer{
  width:100%;
  height:40px;
  margin:15px 0;
  
  .company{
    margin: 0 auto;
    width: 47px;
    height: 15px;
    background: url(//gw.alicdn.com/tfs/TB1BpiosmzqK1RjSZPcXXbTepXa-94-30.svg) 50% no-repeat;
    background-size: cover;
  }
  .info{
    width:100%;
    height:18px;
    line-height:18px;
    font-size:12px;
    color:#999;
    text-align: center;
    padding:0;
    .info-f{
      display: inline-block;
      width:120px;
      height:18px;
      font-size:12px;
      color:#349cec;
    }
  }

}


</style>


