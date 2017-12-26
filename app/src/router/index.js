import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Explore from '@/components/Explore';
import Resume from '@/components/Resume';

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
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
