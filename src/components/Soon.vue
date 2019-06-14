<template>
  <ul class="film-list">
    <router-link class="film-item"
    v-for="film in list"
    :key="film.filmId"
    tag="li"
    :to="{
      name: 'detail',
      params: {
        filmId: film.filmId
      }
    }"
    >
    <img class="film-img" :src="film.poster" alt="">
    <div class="film-info">
      <p class="film-info__name">{{ film.name }}</p>
      <p class="film-info__actors">主演: {{ film.actors | formatActor }}</p>
      <p class="film-info__detail">{{ film.nation }} | {{ film.runtime }}分钟</p>
      <div class="film-buy">预售</div>
    </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
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
