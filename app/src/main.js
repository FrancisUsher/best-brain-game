// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'vue-material/dist/vue-material.min.css';
// Uncomment to enable the dark material theme
// import 'vue-material/dist/theme/default-dark.css';
import { MdCard, MdBottomBar, MdTabs, MdIcon, MdButton, MdApp, MdContent, MdToolbar, MdField, MdList, MdAvatar, MdDivider } from 'vue-material/dist/components';
import App from './App';
import router from './router';
import BarRouter from './components/BarRouter';
import MessageListItem from './components/MessageListItem';
import './assets/material-icons.css';

Vue.use(MdButton);
Vue.use(MdBottomBar);
Vue.use(MdTabs);
Vue.use(BarRouter);
Vue.use(MdIcon);
Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdToolbar);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdAvatar);
Vue.use(MdDivider);
Vue.use(MdCard);

Vue.config.productionTip = false;

Vue.component('messageListItem', MessageListItem);
Vue.component('barRouter', BarRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
