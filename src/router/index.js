import Vue from 'vue';
import VueRouter from 'vue-router';
import Searcher from '@/components/Searcher.vue';
import Details from '@/components/Details.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);   

export default new VueRouter({
  routes: [
      {
          path: '/', 
          component: Searcher,
      },
      {
          path: '/', 
          component: Details,
      },
      {
          path: '*',
          component: NotFound,
      },
  ]
})