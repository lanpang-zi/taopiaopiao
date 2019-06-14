import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vant from 'vant'
import 'vant/lib/index.css'
import './styles/base.less'
import store from './store'


Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
