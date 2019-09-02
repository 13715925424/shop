<template>
  <div id="index">
    <Head :title="'定制'" :showBack="true">
    </Head>
    <div id="content">
        <div class="row">
            <span>尺寸：</span>
            <div class="row-right">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="sizeWidth.value" :options="sizeWidth.option" />
                    <van-dropdown-item v-model="sizeHeight.value" :options="sizeHeight.option" />
                </van-dropdown-menu>
            </div>
        </div>
        <div class="row">
            <span>画面：</span>
            <div class="row-right">
                <van-uploader  v-model="fileList"  multiple :max-count="5" :before-read="beforeRead" />
            </div>
        </div>
        <div class="row">
            <span>画框：</span>
            <div class="row-right">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="pictureBorder.value" :options="pictureBorder.option" />
                </van-dropdown-menu>
            </div>
        </div>
        <div class="row">
            <span>邮费：</span>
            <div class="row-right">
                <span>{{posTage}}元</span>
            </div>
        </div>
        <div class="row">
            <span>总费用</span>
            <div class="row-right">
                <span>{{totalCost}}元</span>
            </div>
        </div>
        <div class="tip">注：也可将需求提交至{{email}}邮箱</div>
        <div class="sub"> 提交定制 </div>
    </div>
  </div>
</template>

<script>
import Head from '../components/Head'
export default {
  data () {
    return {
        sizeWidth:{
            value: 0,
            option: [
                { text: '宽（cm）', value: 0 },
                { text: '10.00cm', value: 1 },
                { text: '15.55cm', value: 2 }
            ],
        },
        sizeHeight:{
            value: 0,
            option: [
                { text: '高（cm）', value: 0 },
                { text: '10.00cm', value: 1 },
                { text: '15.55cm', value: 2 },
            ]
        },
        fileList: [],
        pictureBorder:{
            value: 0,
            option: [
                { text: '请选择', value: 0 },
                { text: '木制', value: 1 },
                { text: '金属框', value: 2 },
            ]
        },
        posTage:'11.00',
        totalCost:'111.00',
        email:'231231@to.com'
    }
  },
  components:{
    Head
  },
  methods:{
      beforeRead(){
          console.log(this.fileList)
          return true
      }
  }
}
</script>

<style lang="stylus" scoped>
    #content{
        position absolute
        top 54px
        left 0 
        right 0
        .row{
            display flex
            justify-content flex-start
            align-items center
            padding 5px 15px
            border-bottom 1px solid #ebedf0
            background #ffffff
            min-height 60px
            span{
                margin-right 10px
                font-size 15px
                margin-bottom 2px
                min-width 45px
            }
            .row-right{
                flex-grow 1
                >span {
                    margin-left 5px
                }
            }
        }
        .tip{
            padding 10px 15px
            font-size 14px
            color #999
        }
        .sub{
            margin 20px 50px
            text-align center
            background #2196f3
            color #ffffff
            height 40px
            line-height 40px
            border-radius 20px
        }
    }
</style>
<style lang="stylus">
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-width 0
    }
    .van-dropdown-menu__item{
        flex-grow 0
        min-width 100px
        justify-content flex-start
    }
</style>