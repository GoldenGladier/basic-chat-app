import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./plugins/fontAwesome');

Vue.config.productionTip = false

import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import vClickOutside from 'v-click-outside';  
Vue.use(vClickOutside);  
