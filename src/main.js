import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/normalize.css'
import store from '@/store'
import '@/fiters'

import 'vant/lib/index.css';
import { Tab, Tabs, Lazyload, Sticky, Swipe, SwipeItem, DropdownMenu, DropdownItem, Uploader, Cell, CellGroup, AddressList,AddressEdit, Area }  from 'vant';
Vue.use(Tab).use(Tabs).use(Lazyload).use(Sticky).use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem).use(Uploader).use(Cell).use(CellGroup).use(AddressList).use(AddressEdit).use(Area);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
