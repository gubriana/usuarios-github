import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.prototype.axios = axios;

Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    count: 350,
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy' },
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'Cars', genre: 'Family' },
      { id: 4, title: 'Toy Story', genre: 'Family' },
    ],
    algo: 'nickk'
  }
  /* mutations: {
    increment(state) {
      state.count++
    }
  } */
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')