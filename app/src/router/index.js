import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Explore from '@/components/Explore';
import Help from '@/components/Help';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore,
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
    },
  ],
});
