import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index'

// 코드 스플리팅
// import LoginPage from '../views/LoginPage.vue'
// import SignupPage from '../views/SignupPage.vue'

Vue.use(VueRouter);

const router = new VueRouter({
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
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: ()=> import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      // Dynamic Route Matching
      path: '/post/:id',
      component: ()=> import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      // 라우터 폴백
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    }
  ]
});

// 네비게이션 가드
// to : 이동하려는 페이지
// from : 현재 페이지
// next : 페이지 이동할 때 호출하는 API (next()를 해야만 이동한다.)
router.beforeEach((to, from, next) => { 
  if (to.meta.auth && !store.getters.isLogin) { 
    // 인증이 필요한 페이지일 경우 (auth)
    // + 로그인하지 않았을 때 (!isLogin)
    next('/login');
    return;
  }
  next();
})

export default router;