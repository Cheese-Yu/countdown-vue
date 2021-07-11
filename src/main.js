import Vue from 'vue'
import App from './App.vue'
import countDown from './lib/countdown'
Vue.use(countDown);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
