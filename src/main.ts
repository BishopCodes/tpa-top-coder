// Polyfills for IE Support
import 'babel-polyfill';
import 'event-source-polyfill';

import Logger from '@/plugins/logger';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Logger);

new Vue({
  router,
  store,
  vuetify,
  render: (create) => create(App),
  watch: {
    $route: (to) => {
      document.title = to.meta.title || 'Transcript Processing Application';
    },
  },
}).$mount('#app');
