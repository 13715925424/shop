<template>
  <div id="index">
    <Head :title="'修改地址'" :showBack="true"></Head>
    <div id="content">
      <van-address-edit :area-list="areaList" :address-info="starInfo" show-delete show-set-default  
        @save="onSave"
        @delete="onDelete"
      />
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
      alert("保存todo...")
    },
    onDelete(){
      alert("删除todo...")
    }
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
