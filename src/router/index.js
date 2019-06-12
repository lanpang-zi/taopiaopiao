import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index/index.vue'
import City from '../views/City/index.vue'
import Login from '../views/Login/index.vue'
import Film from '../views/Index/film.vue'
import Cinema from  '../views/Index/cinema.vue'
import Center from '../views/Index/center.vue'
import Ticket from '../views/Center/cinema-ticket.vue'
import Coupon from '../views/Center/coupon.vue'
import Card from '../views/Center/card.vue'
import Help from '../views/Center/help.vue'


Vue.use(Router)

var router =new Router({
  routes:[
    {
      path:'/',
      component:Index,
      children:[
        {
          path:'films',
          name:'film',
          component:Film
        },
        {
          path:'cinemas',
          name:'cinema',
          component:Cinema
        },
        {
          path:'center',
          name:'center',
          component:Center,
          meta: {
            requireLogin: true
          }
        },
        {
          path:'',
          redirect:'/films'
        }
      ]
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/ticket',
      component:Ticket,
      meta: {
        requrireLogin:true
      }
    },
    {
      path:'/coupon',
      component:Coupon,
      meta: {
        requrireLogin:true
      }
    },
    {
      path:'/card',
      component:Card,
      meta: {
        requrireLogin:true
      }
    },
    {
      path:'/help',
      component:Help,
      meta: {
        requrireLogin:true
      }
    }

   

  ]
})


router.beforeEach((to,from,next)=>{
  if(to.meta.requrireLogin){

    if(window.localStorage.getItem('userInfo')){
      next();
    }else{
      next({
        path:'/path',
        query:{
          redirect:to.fullPath
        }
      })
    }

  }else{
    next();
  }

})

export default router

