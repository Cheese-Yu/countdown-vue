import Vue from 'vue'
import App from './App.vue'
import countDown from './lib/countdown'
// 使用插件
Vue.use(countDown);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
