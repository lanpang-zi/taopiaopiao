<template>
  <div>
    <div class="header">
      <div class="bank-list">
        <div class="client">客户号：18400277468</div>
        <div class="bank-form">
          <div class="bank-number">
            <div class="bank-label-t">卡号：</div>
            <input type="text" v-model="bankTxt" @input="gettxt" class="bank-txt" name="bank-txt" maxlength="16" placeholder="请填写卡号">
          </div>

          <div class="bank-password">
            <div class="bank-label-b">密码：</div>
            <input type="password" v-model="bankPwd" @input="getpwd" class="bank-pwd" name="bank-pwd" maxlength="6" placeholder="请填写卡背面的6位密码">
           </div>
        </div>

      </div>

      <div class="bank-wrap">
        <button class="bank-btn" :disabled="isok" @click="fn" ref="btn">立即绑卡</button>
        
      </div>


    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data (){
    return{
      isok:true,
      bankTxt:'',
      bankPwd:''

    }
    
  },
  methods:{
    gettxt(){
      if(this.bankTxt.length==16){
      this.isok=false;
      console.log(this);

      }
    },
    getpwd(){
      if(this.bankPwd.length==6){
        this.isok=false;
        this.$refs.btn.style.background='linear-gradient(45deg,#ff798b,#fa445b)'

      }else{
        this.isok=true
      }
    },
    fn(){
        
      Dialog.alert({
          message: '请添加有效的银行卡和正确的密码'
        }).then(() => {
         // on close
         
        })
        return;
    },

  },
  
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

.header{
  width:100%;
  height:665px;
  overflow: hidden;

  .bank-list{
    width:100%;
    height:154px;
    overflow: hidden;

    .client{
      width:100%;
      height:22px;
      margin:10px 15px;
      box-sizing: border-box;
      
    }
    .bank-form{
      width:100%;
      height:120px;
      background:#fff;
      overflow: hidden;
      .bank-number{
        width:100%;
        height:60px;
        padding:8px 12px;
        box-sizing: border-box;
         .bank-label-t{
           width:45px;
           height:25px;
           float:left;
           font-size:15px;
           line-height:25px;
           vertical-align: middle;
         }
         .bank-txt{
           display:block;
           width:334px;
           height:25px;
           line-height: 25px;
           float: left;
           border:0;
           
         }
      }
      .bank-password{
        width:100%;
        height:60px;
        padding:8px 12px;
        box-sizing: border-box;
        border-top:1px solid #ccc;
          .bank-label-b{
           width:45px;
           height:25px;
           float:left;
           font-size:15px;
           line-height:25px;
           vertical-align: middle;
         }
         .bank-pwd{
           display:block;
           width:334px;
           height:25px;
           line-height: 25px;
           float: left;
           border:0;
           
         }
      }
    }
  }
  .bank-wrap{
    width:100%;
    height:88px;
    padding:20px;
    .bank-btn{
      display: block;
      width:370px;
      height:44px;
      border-radius: 22px;
      border:0;
      background:#c8c8c8;
      color:#fff
    }
  }
}

</style>


