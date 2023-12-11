import Vue from 'vue';
import VueRouter from 'vue-router'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue'
import ThirdListView from '../views/ThirdListView.vue'
import ThirdOneView from '../views/ThirdOneView.vue'
import ThirdTwoView from '../views/ThirdTwoView.vue'
import ThirdThreeView from '../views/ThirdThreeView.vue'
import SlotView from '../views/SlotView.vue'

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
      component: ThirdListView,
    },
    {
      path: '/thirdone',
      name: 'one',
      component: ThirdOneView,
    },
    {
      path: '/thirdtwo',
      name: 'two',
      component: ThirdTwoView,
    },
    {
      path: '/thirdthree',
      name: 'three',
      component: ThirdThreeView,
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotView,
    },
  ]
})