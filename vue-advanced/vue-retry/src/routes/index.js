import Vue from 'vue';
import VueRouter from 'vue-router'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue'
import ThirdListView from '../views/ThirdListView.vue'
import ThirdOneView from '../views/ThirdOneView.vue'
import ThirdTwoView from '../views/ThirdTwoView.vue'
import ThirdThreeView from '../views/ThirdThreeView.vue'
import SlotView from '../views/SlotView.vue'
import EventBusView from '../views/EventBusView.vue'
import createListView from '../views/HocView.js'
import Mixin1View from '../views/Mixin1View.vue'
import Mixin2View from '../views/Mixin2View.vue'
import DesignPattern from '../views/DesignPattern.vue'

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
    {
      path: '/eventbus',
      name: 'eventbus',
      component: EventBusView,
    },
    {
      path: '/usehoc1',
      name: 'usehoc1',
      //함수 기반 재사용
      component: createListView('HocUseView1'),
    },
    {
      path: '/usehoc2',
      name: 'usehoc2',
      //함수 기반 재사용
      component: createListView('HocUseView2'),
    },
    {
      path: '/mixin1',
      name: 'mixin1',
      component: Mixin1View,
    },
    {
      path: '/mixin2',
      name: 'mixin2',
      component: Mixin2View,
    },
    {
      path: '/designpattern',
      name: 'designpattern',
      component: DesignPattern,
    },
  ]
})