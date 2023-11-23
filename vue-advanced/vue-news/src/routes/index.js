import Vue from 'vue';
import VueRouter from 'vue-router'
// import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// 컴포넌트의 컴포넌트 추가
import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      //component: NewsView,
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'),
    },
    // 동적 라우팅
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
})