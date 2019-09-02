<template>
  <div id="index">
    <Head :title="'我的收获地址'" :showBack="true">
    </Head>
    <div id="content">
      <van-address-list v-model="chosenAddressId" :list="list"  @add="onAdd" @edit="onEdit" />
    </div>
  </div>
</template>

<script>
import Head from '../components/Head'
export default {
  data () {
    return {
        chosenAddressId: '1',
        list: [
            {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
            }
        ],
    }
  },
  components:{
    Head
  },
  methods:{
    onAdd() {
        this.$router.push("/add-address")
    },
    onEdit(item, index) {
        this.$router.push("/edit-address")
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
