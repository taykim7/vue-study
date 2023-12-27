import Vue from 'vue';
import VueRouter from 'vue-router';

// 코드 스플리팅
// import LoginPage from '../views/LoginPage.vue'
// import SignupPage from '../views/SignupPage.vue'

Vue.use(VueRouter);

export default new VueRouter({
  // url에 # 제거
  mode: 'history',
  routes: [
    {
      // 리다이렉트
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: ()=> import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: ()=> import('@/views/SignupPage.vue'),
    },
    {
      // 라우터 폴백
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    }
  ]
});