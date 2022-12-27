import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // 이렇게 컴포넌트하는 것과 render 과 같음
  // components: {
  //   'app': App
  }
}).$mount('#app')

// 동일함
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
