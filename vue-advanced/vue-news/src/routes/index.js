import Vue from 'vue';
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// 컴포넌트의 컴포넌트 추가
//import createListView from '../views/CreateListView'
import bus from '../utils/bus';
import { store } from '../store/index.js'

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
      component: NewsView,
      //component: createListView('NewsView'),
      // beforeEnter: () => {}
      beforeEnter: (to, from, next) => {
        // 이동할 url
        console.log( 'to : ', to);
        // 현재 라우팅 정보
        console.log( 'from : ', from);
        // next()를 호출해야 갈 수 있따.
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name).then(() => {
          bus.$emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
        
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name).then(() => {
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        store.dispatch('FETCH_LIST', to.name).then(() => next())
      }
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