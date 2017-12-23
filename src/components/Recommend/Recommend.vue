<template>
  <div>
    <slider></slider>
    <divider>热门推荐</divider>
  </div>
</template>

<script>
import { Divider } from 'vux'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  components: {
    Divider
  },
  createrd () {
    this.getRecommend()
  },
  methods: {
  _getRecommend () {
    getRecommend().then((res) => {
      if (res.code === ERR_OK) {
        console.log(res.data.slider)
      }
    })
  }
  }
}
</script>

