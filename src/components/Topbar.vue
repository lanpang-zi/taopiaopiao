<template>
  <div class="topbar">
    <div class="city-selected">
      <span>北京</span>
      <i>></i>
    </div>
    <div class="topbar-wrap">
      <div class="topbar-item left">
        <span>全城</span>
        <i></i>
      </div>
      <div class="topbar-item left">
        <span>综合排序</span>
        <i></i>
      </div><div class="topbar-item left">
        <span>特色</span>
        <i></i>
      </div>
      <div class="topbar-item left search-selector">
        <span>搜索</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',

  props: {
    tops: Array
  }
}
</script>

<style lang="less" scoped>
.topbar{
  display: flex;
  width: 100%;
  color: #999;
  box-sizing: border-box;
  z-index: 99;
  background-color: #fff;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ccc;
  .city-selected{
    width: 105px;
    text-align: center;
    line-height: 42px;
    span{      
    }
  }
  .topbar-wrap{
    flex: 1;
    .left{
      float: left;
    }
    .topbar-item{
      line-height: 42px;
      width: 75px
    }
    .search-selector{
      width: 42px;
    }
  }
}
</style>
