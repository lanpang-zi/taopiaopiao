import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index/index.vue'
import City from '../views/City/index.vue'
import Login from '../views/Login/index.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      component:Index
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/login',
      component:Login
    }
   

  ]
})


export default router