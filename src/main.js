import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(Vuex)
  
  const store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
      writeCount(state) {
        state.count = 3
      }
    }
  })

Vue.prototype.axios = axios;

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')