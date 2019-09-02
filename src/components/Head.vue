<template>
  <div id="head">
    <div class="back-div" v-if="showBack" @click="back"><img src="../../static/back.svg" /></div>
    <div class="head-font">{{title}}</div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
    title:String,
    showBack:{
      type:Boolean,
      default:true
    },
    backUrl:{
      type:String,
      default:''
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #head{
    position absolute
    top 0
    left 0
    right 0
    display flex
    justify-content center
    align-items center
    height 44px
    padding 0 15px
    background #ffffff
    .back-div{
      width 20px
      height 20px
      position absolute
      left 15px
      img{
        width 100%
        height 100%
      }
    }
    .head-font{
      text-align center
      width 250px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
    }
    .diy-div{
      width 20px
      height 20px
      position absolute
      right  15px
      img{
        width 100%
        height 100%
      }
    }
  }
</style>
