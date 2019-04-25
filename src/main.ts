import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';
import ElementUI from 'element-ui';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(ElementUI);

const instance = axios.create();
instance.defaults.withCredentials = true;
Vue.prototype.$axios = instance;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
