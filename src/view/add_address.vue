<template>
  <div id="index">
    <Head :title="'添加收货地址'" :showBack="true"></Head>
    <div id="content">
      <van-address-edit :area-list="areaList"  @save="onSave" show-set-default/>
    </div>
  </div>
</template>

<script>
import areaList from '../../static/city'
import Head from '../components/Head'
export default {
  data () {
    return {
      areaList:areaList,
      starInfo:{
        id:1,
        name:'张三',
        tel:'13715987548',
        province:'北京市',
        city:'北京市',
        county:'东城区',
        addressDetail:'士大夫但是离开对方地方法规法规',
        isDefault:true
      }
    }
  },
  components:{
    Head
  },
  methods:{
    onSave(){
      alert("添加地址todo...")
    },
  }
}
</script>

<style lang="stylus" scoped>
    #content{
        position absolute
        left 0
        right 0
        top 54px
        bottom 0
    }
</style>
