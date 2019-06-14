<template>
<div>
  <div class="tpp-hdr">
    <div class="tpp-hdr-left">
      <div class="tpp-logo"></div>
      <router-link to='/city'>深圳</router-link>
      <div class="tpp-down"></div>
    </div>
    <div class="tpp-hdr-right">
      <ul class="tablist">
        <li
        class="tab-item"
        :class="{'active':curItem === index}"
        v-for="(item, index) in tabs"
        :key="item.id"
        @click="chgCss(index)"
        >
          <div class="content">{{ item.name }}</div>
        </li>
        <li class="tab-ink-bar" :style="`transform: translate3d(${activeTabLink}, 0px, 0px)`"></li>
      </ul>
    </div>
  </div>
  <!-- <Now></Now> -->
  <!-- <Soon></Soon> -->
  <component :is="curCom" :list="filmList" class="film-tabs"></component>

</div>
</template>

<script>
import Now from '@/components/Now.vue'
import Soon from '@/components/Soon.vue'
import axios from 'axios'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      tabs: [
        {id: 1, name: '正在热映'},
        {id: 2, name: '即将上映'},
      ],
      activeTabLink: '39px',
      tabLinkData: ["39px","133px"],

      curItem: 0,
      curCom : 'Now',
      comName : ['Now', 'Soon'],

      // filmsList: []
    }
  },

  computed: {
    ...mapState('film', [
      'filmList',
      'loading'
    ]),

    curFilmType: {
      get () {
        return this.$store.state.film.curFilmType
      },

      set (value) {
        this.$store.commit('film/SETCURFILMTYPE', value)
      }
    }
  },

  methods: {
    chgCss (index) {
      this.activeTabLink = this.tabLinkData[index]
      this.curItem = index
      this.curCom = this.comName[index]
      // this.getData()
    },

    ...mapMutations('film', 'ADDPAGENUM'),
    ...mapActions('film', [
      'getFilmList',
      'filmChange'
    ]),

    onScroll () {
      // 判断当前是否滚动到了底部
      let scrollTop = document.documentElement.scrollTop // 滚动条距离顶部的距离

      let scrollHeight = document.body.scrollHeight // 页面的高度
      let clientHeight = document.documentElement.clientHeight // 可视区域的高度
      // console.log(scrollTop, scrollHeight, clientHeight);

      if ((scrollHeight - clientHeight) - scrollTop < 50) {
        // console.log('到底了');
        if (!this.loading) {
          this.getFilmList(true)
        }
      }
    }
    // getData () {
    //   axios.get('https://m.maizuo.com/gateway', {
    //     params: {
    //         cityId: 440300,
    //         pageNum: 1,
    //         pageSize: 10,
    //         type: 1,
    //         k: 2317814
    //       },
    //       headers: {
    //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596138585209795330186"}',
    //         'X-Host': 'mall.film-ticket.film.list'
    //     }
    //   }).then(response => {
    //     this.filmsList = response.data.data.films
    //     // console.log(this.filmsList)
    //   })
    // }
  },

  created () {
    // this.getData()
    this.getFilmList()
    this.filmChange()

    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    // this.ADDPAGENUM(true)
  },

  // // 激活
  // activated () {
  //   window.addEventListener('scroll', this.onScroll)
  // },

  // // 失活
  // deactivated () {
  //   window.removeEventListener('scroll', this.onScroll)
  // },

  components: {
    Now,
    Soon
  }
}
</script>

<style lang='less'>
  @import '~@/styles/common/variable.less';
  @import '~@/styles/common/mixins.less';

  .tpp-hdr {
    .border-bottom;
    height: 50px;
    display: flex;
    justify-content: space-around;

    .tpp-hdr-left {
      display: flex;
      align-items: center;
      justify-content: center;

      .tpp-logo {
        width: 25px;
        height: 25px;
        background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: 15px;
        padding-left: 20px;
      }
      .tpp-down {
        width: 8px;
        height: 4px;
        position: relative;
        margin-left: 3px;
        vertical-align: middle;
        display: inline-block;

        &::after {
          content: "";
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid #333;
          display: block;
          position: absolute;
          margin: -1px 0 0 -4px;
        }
      }

    }

    .tpp-hdr-right {
      display: flex;

      .tablist {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .tab-item {
          padding: 0 4vw;
        }
        .active {
            font-weight: 700;
            color: #ff4d64;
        }
        .tab-ink-bar {
          padding: 0;
          margin: 0;
          height: 2px;
          background: #ff4d64;
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 16px;
          transition: all 0.5s;
        }

      }
    }

  }
  .film-tabs {
    padding-bottom: 50px;
    overflow: hidden;
  }
</style>
