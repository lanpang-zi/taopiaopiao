<template>
  <div>
    <div class="logo">

    </div>
    <div class="form">
      <div class="input-list">
        <div class="input-user">
            <input type="text"  v-model="Name"  name="username" placeholder="手机号/邮箱/用户名">
        </div>
        <div class="input-pwd">
            <input type="password" v-model="Pwd" name="password" placeholder="请输入密码">
        </div>

      </div>

      <div class="verify">
       <a href="https://login.m.taobao.com/msg_login.htm?redirectURL=https%3A%2F%2Fh5.m.taopiaopiao.com%2Fapp%2Fmoviemine%2Fpages%2Fprofile%2Findex.html%3Fspm%3Da1z2r.7661912.0.0.3fa5112a5DdX8j%26from%3Douter%26sqm%3Da1z2r.7661912.1.1%26title%3D%25E6%2588%2591%25E7%259A%2584" class="v-left">短信验证码登录</a>

        <a href="//reg.taobao.com/member/new_register.jhtml?TPL_redirect_url=https://h5.m.taopiaopiao.com/app/moviemine/pages/profile/index.html?spm=a1z2r.7661912.0.0.3fa5112a5DdX8j&amp;from=outer&amp;sqm=a1z2r.7661912.1.1&amp;title=%E6%88%91%E7%9A%84" class="v-right">免费注册</a>

      </div>
      <div class="index">
        <button @click="handleLogin">登 录</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import { Dialog } from 'vant';

export default {

  data (){
    return {
      Name:'',
      Pwd:'',
      
    }
  },

  methods:{
    handleLogin (){
    
      var obj= {
        username:this.Name,
        password:this.Pwd
      }

      if(this.Name==''){
       Dialog.alert({
       message: '请输入用户名'
      }).then(() => {
       // on confirm
       })
       return;

      }else if(this.Pwd==''){
        Dialog.alert({
          message: '请输入密码'
        }).then(() => {
         // on close
         
        })
        return;
        
         
      }

      // if(this.Pwd!=this.user[0].password){
      //   Dialog.alert({
      //     message: '弹窗内容'
      //   }).then(() => {
      //    // on close
         
      //   })
          
      // }

      axios.get('http://localhost:3000/user',{
        params:{
          username:`${obj.username}`,
          password:`${obj.password}`
        }
      }
      )
      .then(response=>{
        // this.user.push(response);
        console.log(response);
        console.log('登录成功')
        if(response.data.length>0){
             var userInfo ={
               username:`${obj.username}`,
               password:`${obj.password}`
             }
            window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
            this.$router.replace('/center')
        }else{
           Dialog.alert({
             message: '用户权限被占用'
           }).then(() => {
             // on confirm
           })
             return;
        }
       
        
        
        
      })
      .catch(error=>{
        alert('登录失败');
      })
     
       //console.log(this.$router);
       //var redirect=this.$router.query.redirect|| '/center'
      
       
   
  }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

.logo{
  width:80px;
  height:80px;
  background:url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
  background-size: cover;
  margin:50px auto;
}

.form{
  display:block;
  width:100%;
  height:238px;
  
  .input-list{
    width:364px;
    height:110px;
    margin:0 auto;

    .input-user{
      width:364px;
      height:30px;
      border-bottom:1px solid #ff5000;

      input{
        display: block;
        width:364px;
        height:24px;
        border:0;
        outline: none;
        font-size:18px;
        opacity: 0.7;
      }
    }

    .input-pwd{
      width:364px;
      height:30px;
      border-bottom:1px solid #ff5000;
      margin-top:50px;

      input{
        display: block;
        width:364px;
        height:24px;
        border:0;
        outline: none;
        font-size:18px;
        opacity: 0.8;
      }

    } 
  }

  .verify{
    width:364px;
    height:16px;
    margin:20px auto 0;

    .v-left{
      display: block;
      float:left;
      color:#333;
    }

    .v-right{
      display:block;
      float:right;
      color:#333;
    }
  }

  .index{
      width:364px;
      height:50px;
      margin:30px auto 0;

      button{
        display:block;
        width:364px;
        height:50px;
        border:0;
        border-radius: 25px;
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color:#fff;
      }
    }

}

</style>


