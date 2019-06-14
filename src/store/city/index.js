// 这是城市相关的仓库数据
import axios from 'axios'
// import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    cityList: [] // 城市列表数据
  },

  getters: {
    newCityList (state) {
      let index = 0
      let hash = {}
      let result = []

      state.cityList.forEach(city => {
        let py = city.pinyin.charAt(0).toUpperCase()
        if (hash[py]) {
          result[hash[py] - 1].list.push(city)
        } else {
          // 让他下次碰到首字母相同的，让他走到if条件
          hash[py] = ++index
          // 构建我们需要的数据结构
          let obj = {
            py: py,
            list: [city]
          }
          // 将构建的数据追加到 result 里面
          result.push(obj)
        }
      })

      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    hotList (state) {
      return state.cityList.filter(item => item.isHot)
    },
    indexlist (state, getters) {
      // [{py: 'A'}, {py: 'B'}]
      // ['A', 'B', 'C']
      return getters.newCityList.map(item => item.py)
    }
  },

  mutations: {
    SETCITYLIST (state, list) {
      state.cityList = list
    }
  },

  actions: {
    getCityList ({ commit }) {
      // Toast.loading({
      //   duration: 0,
      //   message: '加载中...'
      // })
      axios.get('https://m.maizuo.com/gateway?k=2051578', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15601347106206227745833"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        commit('SETCITYLIST', res.data.data.cities)
        // Toast.clear()
      })
    }
  }
}
