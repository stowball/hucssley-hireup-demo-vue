import Vue from 'vue';
import './styleMixin';
import App from './App.vue';

import './index.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
