<template>
  <div class="person">
    
     <div class="header">
       <div class="avatar"></div>
       <p>因为一句我爱你</p>
         
     </div>

      
     <div class="menu">
       <div class="menu-nav">
        <ul>
          <router-link to="/ticket">
            <van-icon name="hot" color="#f6242e" />
            <span>电影票</span>
          </router-link>

          <router-link to="/coupon">
           <van-icon name="vip-card" color="#f68724"/>
            <span>优惠劵</span>
          </router-link>
        </ul>

      </div>

      <div class="menu-list">
        <div class="menu-item">
          <router-link to="/card">
            <span class="menu-movice">淘票票乐影卡</span>
            <span class="menu-span">></span>
          </router-link>
        </div>
      </div>


      <div class="menu-list2">
        <div class="menu-item2">
          <router-link to="/help">
            <span class="menu-movice">帮助与反馈</span>
            <span class="menu-span">淘票小蜜 ></span>
          </router-link>
        </div>
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
   .header{
     height:188px;
     background:#ff4d64;

     .avatar{
       width:80px;
       height:80px;
       border-radius: 50%;
       background:url(../../assets/img04.jpg) no-repeat;
       background-size: cover;
       float:left;
       margin-left:30px;
       margin-top:36px;
     }
     p{
       display: block;
       min-width:140px;
       height:80px;
       line-height:80px;
       font-size:20px;
       font-weight:500;
       color:#fff;
       float:left;
       margin-left:15px;
       margin-top:36px;
     }
   }

   .menu{
     height:260px;
     background:#fff;

     .menu-nav{
       height:126px;

       ul{
          height:126px;
          width:100%;
          display: flex;
         
          a{
            display: block;
            flex:1;
            text-align:center;
            font-size:16px;
            color:#333;
            opacity: 0.8;

            i{
              display: block;
              width:36px;
              height:36px;
              line-height: 36px;
              font-size:30px;
              margin:5px auto;
              margin-top:40px;
            }

            span{
              display: block;
              font-size:14px;
            }
  
          }
       }
     }

     .menu-list{
       width:100%;
       height:66px;
     }
     .menu-list:before{
       content: '';
       display: block;
       width:384px;
       height:1px;
       background:#333;
       opacity:0.3;
       margin:0 auto;
       z-index: 10;
     }
     .menu-item{
        width:100%;
        height:66px;

        a{
          display:block;
          width:100%;
          height:66px;
          line-height: 66px;
          font-size:18px;
          color:#333;
          padding:0 14px;
          box-sizing: border-box;

         .menu-movice{
            float:left;
          }
         .menu-span{
            float:right;
            opacity:0.3

          }  
        }
     }

     .menu-list2{
       width:100%;
       height:66px;
     }
     .menu-list2:before{
       content: '';
       display: block;
       width:384px;
       height:1px;
       background:#333;
       opacity:0.3;
       margin:0 auto;
       z-index: 10;
     }
     .menu-item2{
        width:100%;
        height:66px;

        a{
          display:block;
          width:100%;
          height:66px;
          line-height: 66px;
          font-size:18px;
          color:#333;
          padding:0 14px;
          box-sizing: border-box;

         .menu-movice{
            float:left;
          }
         .menu-span{
            float:right;
            opacity:0.3
          } 
        }
     }
     
   }

</style>


