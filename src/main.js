import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueAxios from 'vue-axios'
import Axios from 'axios'

// import LoadScript from 'vue-plugin-load-script';



Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, Axios);

// Vue.use(LoadScript);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.loadScript("../assets/js/login.js").then(() => {
//     // Código en caso de que tu script cargue
// }).catch(() => {
//     // Código en caso de que la carga de tu script fallé
// });