import Vue from 'vue';
import VueRouter from 'vue-router';
import Details from '@/components/Details.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);   

export default new VueRouter({
  routes: [
      {
          path: '/', 
      },
      {
          path: '/details', 
          component: Details,
      },
      {
          path: '*',
          component: NotFound,
      },
  ]
})