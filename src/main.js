import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import { BootstrapVue, IconsPlugin,  BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
