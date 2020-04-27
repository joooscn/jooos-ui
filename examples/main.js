import Vue from 'vue'
import App from './App.vue'
import chart from '../../packages/index'
// import chart from '../packages/index'
Vue.use(chart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
