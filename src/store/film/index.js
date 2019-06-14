// 影片数据仓库
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    // bannerList: [], // 轮播图数据

    filmList: [], // 当前影片的数据

    pageNum: 1, // 当前页码
    pageSize: 10, // 每页显示条数
    curFilmType: 0, // 当前影片的类型 0-正在热映 1-即将上映
    loading: false // 是否在请求数据中
  },

  mutations: {
    // SETBANNERLIST (state, list) {
    //   state.bannerList = list
    // },
    SETFILMLIST (state, list) {
      state.filmList = list
    },
    SETCURFILMTYPE (state, type) {
      state.curFilmType = type
    },
    SETLOADING (state, bol) {
      state.loading = bol
    },
    /**
     *
     * @param {Boolean} isReset 是否从1开始
     */
    ADDPAGENUM (state, isReset) {
      isReset ? state.pageNum = 1 : state.pageNum += 1
    }
  },

  actions: {

    /**
     * 获取影片数据
     * @param {Boolean} isLoadMore 是否是加载更多数据
     */
    getFilmList ({ commit, state }, isLoadMore) {
      // 请求之前 loading
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true) // 请求中
      setTimeout(() => {
        axios.get('https://m.maizuo.com/gateway', {
          params: {
            cityId: 440300, // 城市id
            pageNum: state.pageNum, // 当前页码
            pageSize: state.pageSize, // 每页条数
            type: state.curFilmType === 0 ? 1 : 2, // 影片类型 1-正在热映 2-即将上映
            k: 1028947
          },
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596138585209795330186"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        }).then(res => {
          console.log(res)
          if (isLoadMore) {
            // 数据拼接
            let newFilmList = [...state.filmList, ...res.data.data.films]

            commit('SETFILMLIST', newFilmList)
          } else {
            // 数据替换
            commit('SETFILMLIST', res.data.data.films)
          }

          commit('ADDPAGENUM') // 请求完成设置pagenum ++
          commit('SETLOADING', false) // 请求完成
          // 请求成功，关闭 loading
          Toast.clear()
        })
      }, 2000)
    },

    /**
     * 影片类型切换
     * @param {Number} index 当前tab的下标 0 - 正在热映 1 - 即将上映
     */
    filmChange ({ dispatch, commit }) {
      // 设置页码为1
      commit('ADDPAGENUM', true)
      // 清空数据的操作
      commit('SETFILMLIST', [])
      // 重新发送ajax请求就OK了
      dispatch('getFilmList')
    }
  }
}
