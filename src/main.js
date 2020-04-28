import Vue from 'vue';
import App from './App';
import store from './store'
import routes from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import jooosUi from '../packages/index'

Vue.use(jooosUi)
Vue.use(ViewUI);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  routes,
  store,
  render: h => h(App)
});