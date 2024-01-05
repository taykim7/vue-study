import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
}).$mount('#app')

// 동일함

/*
new Vue({
  el: '#app',
  render: h => h(App),
})
*/

/*
new Vue({
  // 컴포넌트 구성하는 것이 render 로 하는 것과 같음
  components: {
    'app': App
  }).$mount('#app')
*/