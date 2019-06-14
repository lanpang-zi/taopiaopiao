<template>
  <ul class="film-list">
    <router-link class="film-item"
    v-for="film in list"
    :key="film.filmId"
    :to="{
      name: 'detail',
      params: {
        filmId: film.filmId
      }
    }"
    tag="li"
    >
    <img class="film-img" :src="film.poster" alt="">
    <div class="film-info">
      <p class="film-info__name">{{ film.name }}</p>
      <p class="film-info__grade">
        观众评分: <span>{{ film.grade }}</span>
      </p>
      <p class="film-info__actors">主演: {{ film.actors | formatActor }}</p>
      <p class="film-info__detail">{{ film.nation }} | {{ film.runtime }}分钟</p>
      <div class="film-buy">购票</div>
    </div>
    </router-link>
  </ul>
</template>
<script>
export default {
  props: {
    filmType: {
      validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['Now', 'Soon'].indexOf(value) !== -1
      }
    },
    list: {
      type: Array
    }
  },
  filters: {
    formatActor (value = []) {
      let str = ''
      let arr = value.map(item => item.name)
      str = arr.length > 0 ? arr.join('、') : '暂无主演'
      return str
    }
  }
}
</script>
<style lang="less">
@import '~@/styles/common/mixins.less';
@import '~@/styles/common/variable.less';

  .film-item {
    .border-bottom;
    display: flex;
    align-items: center;
    padding: 15px;
    height: 94px;
    position: relative;

    .film-img {
      width: 66px;
    }

    .film-info {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      line-height: 1;
      color: @tabColor;
    }

    .film-buy {
      .border;
      line-height: 25px;
      height: 25px;
      width: 50px;
      color: #ff5f16;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
    }
  }
</style>
