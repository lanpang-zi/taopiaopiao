import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vant from 'vant'
import 'vant/lib/index.css'
import './styles/base.less'


Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
