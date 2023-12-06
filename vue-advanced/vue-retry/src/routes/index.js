import Vue from 'vue';
import VueRouter from 'vue-router'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue'
// import ThirdView from '../views/ThirdView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    /**
     * ○ 첫 번째 방법
     * - api를 view에서 바로 호출하고 뿌려즈는 방식
     */
    {
      path: '/first',
      component: FirstView,
    },
    {
      path: '/second',
      component: SecondView,
    },
    {
      path: '/third',
      // component: ThirdView,
    },
  ]
})