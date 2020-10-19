import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

Vue.use(Vuex, axios)
  
const store = new Vuex.Store({
  state: {
    count: 0,
    userLogin:''
  },
  getters: {
    items: state => {
        return state.items;
    }
  },
  mutations: {
    SET_Item (state, items) {
      state.items = items
    },
    writeCount(state) {
      state.count = 3
    }
  },
  actions: {
    loadItems ({ commit }) {
      axios
        .get('Your API link', {
        })
        .then(response => response.data)
        .then(items => {
            console.log(items);
        commit('SET_Items', items)
      })
    }
    sendUser(context, userlogin){
      axios
      .get(`https://api.github.com/users/${this.userLogin}`)
      .then(function(response => response.userlogin) {
        const user = datos.userlogin;
        this.userAvatar = user.avatar_url;
        this.userName = user.name;
        this.userLogin = user.login;
        this.userFollowers = user.followers;
        this.userBio = user.bio;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push('/not-found')
      })
      this.axios.get(`https://api.github.com/users/${this.userLogin}/repos`)
      .then((datos) => {
        const repos = datos.data;
        this.userRepos = repos;
        this.$router.push('/details')
      })
    } 
  }
})

Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')



