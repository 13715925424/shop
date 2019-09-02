<template>
  <div id="index">
    <Head :title="'首页'" :showBack="false">
        <div class="diy-div" slot="right" @click="toCenter"><img src="../../static/center.svg"></div>
    </Head>
    <div id="content">
      <van-tabs>
        <van-tab v-for="(types,i) in type" :key="i" :title="types.type">
          <div class="imgs" v-for="(type,i) in types.img" :key="i"><img v-lazy="type.url" @click="toDetails(type.id)"></div>
        </van-tab>
      </van-tabs>
    </div>
    <div id="bottom">
      <div>
        <img src="../../static/nav_1.svg" />
        <span>普通</span>
      </div>
      <div @click="toDiy">
        <img src="../../static/nav_2.svg" />
        <span>定制</span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../components/Head'
export default {
  data () {
    return {
      type:[
        {
          id:1,
          type:"山水画",
          img:[{
            id:"1",
            name:"我的话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"3",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"4",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          }]
        },
        {
          id:2,
          type:"山画",
          img:[{
            id:"1",
            name:"我的话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          }]
        },
        {
          id:3,
          type:"水画",
          img:[{
            id:"1",
            name:"我的话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          }]
        },
        {
          id:4,
          type:"山水画2第三方zss",
          img:[{
            id:"1",
            name:"我的话",
            url:"https://img.yzcdn.cn/vant/apple-2.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          }]
        },
        {
          id:5,
          type:"山ss",
          img:[{
            id:"1",
            name:"我的话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          },{
            id:"2",
            name:"我话",
            url:"https://img.yzcdn.cn/vant/apple-1.jpg"
          }]
        }
      ]
    }
  },
  components:{
    Head
  },
  methods:{
    toDetails(id){
      this.$router.push({path:'/good-details',query:{pro:id}})
    },
    toDiy(){
      this.$router.push("/diy-details")
    },
    toCenter(){
      this.$router.push("/center")
    }
  }
}
</script>

<style lang="stylus" scoped>
  #content{
    position absolute
    top 44px
    left 0
    right 0
    bottom 50px
    padding 10px 0
  }
  .imgs{
    width 50%
    height 120px
    display inline-block
    box-sizing border-box
    margin-bottom 15px
    img{
      width 100%
      height 100%
      border-radius 20px
    }
  }
  .imgs:nth-child(odd){
    padding-right 8px
  }
  .imgs:nth-child(even){
    padding-left 8px
  }
  #bottom{
    position absolute
    bottom 0
    left 0
    right 0
    height 50px
    background-color #ffffff
    display flex
    justify-content space-around
    div{
      display flex
      justify-content center
      align-items center
      flex-direction column
      img{
        height 20px
        width 20px
      }
      span{
        font-size 14px
        margin-top 2px
      }
    }
  }
</style>
<style lang="stylus">
  .van-tabs{
    height 100%
    overflow auto 
  }
  .van-tabs--line .van-tabs__wrap{
    position fixed
    height 50px
    top 44px
    width 100%
  }
  .van-tabs__content{
    margin-top 50px
    padding 0 15px
  }
  .van-tabs__nav{
    display flex
    align-items center
    background #e5e5e5;
    width 100%
  }
  .van-tabs__line{
    display none 
  }
  .van-tab{
    background-color #999999
    border-radius 20px
    color #ffffff
    height 28px
    line-height 28px
    margin-left 10px
  }
</style>