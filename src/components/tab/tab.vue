<template>
  <div>
    <div class="icon"></div>
      <tab>
        <tab-item selected @on-item-click="change('Recommend')">推荐</tab-item>
        <tab-item @on-item-click="change('Rank')">排行</tab-item>
        <tab-item @on-item-click="change('Singer')">歌手</tab-item>
        <tab-item @on-item-click="change('Search')">搜索</tab-item>
      </tab>
    <tab>
      <div>
        <Recommend v-if="showType === 'Recommend'" v-show="true" />
        <Singer v-if="showType === 'Singer'"/>
        <Rank v-if="showType === 'Rank'"/>
        <Search v-if="showType === 'Search'"/>
      </div>
    </tab>
  </div>
</template>
<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  import Singer from '@/components/Singer/Singer'
  import Recommend from '@/components/Recommend/Recommend'
  import Rank from '@/components/Rank/Rank'
  import Search from '@/components/Search/Search'

export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Singer,
      Rank,
      Search,
      Recommend
    },
    data () {
      return {
        showType: 'Recommend'
      }
    },
    methods: {
      change (data) {
        this.showType = data
      }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
body{
  margin: 0;
}
.box {
  padding: 15px;
}
.head{
  margin: 0;padding: 0 ;
  color: #fff;
  background: #04be02;display: block;
  padding: 10px;text-align: left;
      font-family: cursive;font-weight: 200

}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: s;
}
</style>
