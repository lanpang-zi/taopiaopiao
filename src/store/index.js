import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import film from './film'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    film
  }
})
