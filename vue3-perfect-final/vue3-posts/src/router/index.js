import {
	createRouter,
	// createWebHashHistory,
	createWebHistory,
} from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import MyPage from '@/views/MyPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		// 라우트 컴포넌트에 속성 전달 허용 → id가 해당 컴포넌트에 props로 전달
		props: true,
		// props: route => ({ id: route.params.id }),
		// props: route => {
		// 	return {
		// 		id: route.params.id,
		// 	};
		// },
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		// 중첩 라우트 설정
		children: [
			// '/nested/one' 으로 접근가능
			{ path: '', name: 'NestedHome', component: NestedHomeView },
			{ path: 'one', name: 'NestedOne', component: NestedOneView },
			{ path: 'two', name: 'NestedTwo', component: NestedTwoView },
		],
	},
	// 404 Not Found Route
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,

		// 라우트 가드
		// beforeEnter: (to, from) => {
		// 	console.log('to: ', to);
		// 	console.log('from: ', from);
		// 	// return false
		// 	return { name: 'Home' };
		// },
		beforeEnter: [removeQueryString],
	},
];

// 쿼리를 제거하는 메서드
function removeQueryString(to) {
	if (Object.keys(to.query).length > 0) {
		return { path: to.path, query: {} };
	}
}

const router = createRouter({
	history: createWebHistory('/'),
	// history: createWebHashHistory(),
	routes,
});

// // 라우트 가드
// router.beforeEach((to, from) => {
// 	// to: 이동할 페이지
// 	// from: 이동하기 전 페이지
// 	console.log(to);
// 	console.log(from);

// 	// MyPage로 이동할 경우 이동이 안된다.
// 	if (to.name === 'MyPage') {
// 		// return false;
// 		// return { name: 'Home' };
// 		return '/posts';
// 	}
// });

export default router;
