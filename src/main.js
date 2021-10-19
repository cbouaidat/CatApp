import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'
import './plugins/axios'
import * as onLoad from 'vue-onload'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  onLoad,
  render: h => h(App)
}).$mount('#app')
