import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'Index',
      component: resolve=>require(['@/view/index'],resolve),
    },
    {//个人中心
      path: '/center',
      name: 'Center',
      component: resolve=>require(['@/view/center'],resolve),
    },
    {//商品详情
      path: '/good-details',
      name: 'GoodDetails',
      component: resolve=>require(['@/view/good_details'],resolve),
    },
    {//定制
      path: '/diy-details',
      name: 'DiyDetails',
      component: resolve=>require(['@/view/diy_details'],resolve),
    },
    {//我的收获地址
      path: '/my-address',
      name: 'MyAddress',
      component: resolve=>require(['@/view/my_address'],resolve),
    },
    {//修改收获地址
      path: '/edit-address',
      name: 'EditAddress',
      component: resolve=>require(['@/view/edit_address'],resolve),
    },
    {//添加收获地址
      path: '/add-address',
      name: 'AddAddress',
      component: resolve=>require(['@/view/add_address'],resolve),
    }
  ]
})
