<template>
  <div id="index">
    <Head :title="'详情'" :showBack="true">
    </Head>
    <div id="content">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,i) in pros.swiper" :key="i">
                <img v-lazy="item.path" class="swiper_img"/>
            </van-swipe-item>
        </van-swipe>
        <div class="pros-container">
            <div class="pros-name">{{pros.name}}</div>
            <div class="pros-describe">{{pros.describe}}</div>
            <div class="pros-price">{{pros.price}}</div>
        </div>
        <div class="types">
            <div class="type-title">
                <div :class="{'title-active':typeSelect}" @click="changeSelect(true)">详情</div>
                <div :class="{'title-active':!typeSelect}" @click="changeSelect(false)">相关推荐</div>
            </div>
            <div class="type-content-first" v-if="typeSelect" v-html="pros.richtext"></div>
            <div class="type-content-second" v-if="!typeSelect">
                <div v-for="(item,i) in recommend" :key="i"><img v-lazy="item.img" /></div>
            </div>
        </div>
    </div>
    <div id="buy">立即购买</div>
  </div>
</template>

<script>
import Head from '../components/Head'
export default {
  data () {
    return {
        pros:{
            name:'我是商品化工部',
            describe:'商品描述u漏看发单号给老客户更加开放的还是尽快改好就解放立刻解放独立思考可怜见看来飞机的数量看过了好地方',
            price:'99.34',
            swiper:[
                {path:'https://img.yzcdn.cn/vant/apple-3.jpg'},
                {path:'https://img.yzcdn.cn/vant/apple-1.jpg'},
                {path:'https://img.yzcdn.cn/vant/apple-2.jpg'},
            ],
            richtext:'<div>此处是富文本内容<br /><div>jlkdsjfklds</div></div>'
        },
        recommend:[
            {id:1,name:'豪华',img:'http://pic29.nipic.com/20130504/5067821_222052851000_2.jpg'},
            {id:2,name:'豪华d',img:'http://img.mp.sohu.com/upload/20170622/9282da1c68b2444fb65220752a5ff2ff_th.png'},
            {id:3,name:'豪华对方',img:'http://img1.imgtn.bdimg.com/it/u=1872219638,2157828761&fm=26&gp=0.jpg'},
            {id:4,name:'豪华',img:'http://a.hiphotos.baidu.com/zhidao/pic/item/21a4462309f79052b06461fd0ef3d7ca7acbd5fd.jpg'}
        ],
        typeSelect:true //面板切换
    }
  },
  components:{
    Head
  },
  methods:{
      changeSelect(param){
          this.typeSelect=param
      }
  }
}
</script>

<style lang="stylus" scoped>
  #content{
      position absolute
      top 44px
      bottom 50px
      left 0
      right 0
      overflow auto 
  }
  .swiper_img{
      height 150px
      width 100%
  }
  .pros-container{
      background-color #ffffff
      margin-top 10px
      height 100px
      padding 10px 16px
      .pros-name{
          font-weight bold
          font-size 15px
      }
      .pros-describe{
        margin-top 10px
        font-size 14px
        line-height 20px
        display -webkit-box;
        -webkit-box-orient vertical;
        -webkit-line-clamp 2;
        overflow hidden;
      }
      .pros-price{
          color #ff9800
          margin-top 10px
          text-align right 
      }
  }
  .types{
      .type-title{
          display flex
          justify-content space-between
          align-items center
          div{
              width 50%
              height 40px
              line-height 40px
              text-align center
          }
          .title-active{
              color #ffffff
              background #808080
          }
      }
      .type-content-first,.type-content-second{
          min-height 100px
          background #ffffff
          text-align center
          padding 10px 15px
      }
      .type-content-second{
          display flex
          justify-content space-between
          align-items center
          flex-wrap wrap
          div{
              width 50%
              height 120px
              margin-bottom 15px
              box-sizing border-box
              img{
                  width 100%
                  height 100%
                  border-radius 20px
              }
          }
          div:nth-child(odd){
              padding-right 8px
          }
          div:nth-child(even){
              padding-left 8px
          }
      }
  }
  #buy{
      position absolute
      bottom 0
      left 0
      right 0
      height 50px
      display flex
      align-items center
      justify-content center
      color #ffffff
      background-color #77dca0
  }
</style>