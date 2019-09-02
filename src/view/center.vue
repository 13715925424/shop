<template>
  <div id="index">
    <Head :title="'用户中心'" :showBack="true">
    </Head>
    <div id="content">
      <div class="self">
        <img v-lazy="user.userHeader" v-if="user.userHeader"/>
        <img v-lazy="user.default" v-else/>
        <div class="name" v-if="user.name">{{user.name}}</div>
        <div class="name" v-else>请先登陆</div>
      </div>
      <div class="fun">
        <van-cell title="我的订单" is-link />
        <van-cell title="收货地址" is-link to='/my-address'/>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../components/Head'
export default {
  data () {
    return {
      user:{
        name:'马超',
        userHeader:'../../static/temp_user.jpg',
        default:'../../static/user_head.svg'
      }
    }
  },
  components:{
    Head
  },
  methods:{
  }
}
</script>

<style lang="stylus" scoped>
  #content{
    position absolute
    top 54px
    left 0
    right 0
    bottom 0
    .self{
      height 50px
      padding 20px 15px
      background #ffffff
      display flex
      justify-content flex-start
      align-items center
      >img{
        width 50px
        height 50px
        margin-right 20px
        border-radius 50px
      }
      >.name{
        font-size #ccc
      }
    }
    .fun{
      margin-top 10px
    }
  }
</style>
