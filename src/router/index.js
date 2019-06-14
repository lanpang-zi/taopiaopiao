import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index/index.vue'
import City from '../views/City/index.vue'
import Login from '../views/Login/index.vue'
import Film from '../views/Index/film.vue'
import Cinema from  '../views/Index/cinema.vue'
import Center from '../views/Index/center.vue'

Vue.use(Router)

export default new Router({
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
          component:Center
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
      path: '/detail/:filmId',
      name: 'detail',
      component: () => import('../views/Detail/index.vue')
    }
   

  ]
})
