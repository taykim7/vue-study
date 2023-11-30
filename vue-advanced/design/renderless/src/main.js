import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1. 기본 구조
  render: function(createElement) {
    return createElement(App);
  },
  // 2. 하이퍼스크립트(h) 활용 - '버츄얼돔' 을 지칭함
  render: function(h) {
    return h(App);
  },
  // 3. 화살표함수 활용
  render: (h) => {
    return h(App);
  },
  // 4. 인자가 1개라서 축소
  render: h => h(App),
}).$mount('#app')
