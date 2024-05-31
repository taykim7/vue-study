<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩</option>
						<option value="6">6개씩</option>
						<option value="9">9개씩</option>
					</select>
				</div>
			</div>
		</form>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		></AppPagination>
		<hr class="my-5" />
		<template v-if="posts && posts.length > 0">
			<AppCard>
				<!-- router의 파라미터에 의존적이었지만 props: true 라우터 설정으로 속성을 전달할 수 있게 되었따 -->
				<PostDetailView :id="1"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
// 데이터 조회 필터
const params = ref({
	// (1) 정렬 기준 등록일 기준, 내림차순
	_sort: 'createdAt',
	_order: 'desc',
	// (2) 조회 개수
	_limit: 3,
	// (3) 페이지
	_page: 1,
	// (4) 타이틀 필터
	title_like: '',
});
// pagination - 페이지 수 = 전체개수/조회개수 (올림)
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	// getPosts()
	// 	.then(response => {
	// 		console.log(response);
	// 	})
	// 	.catch(error => {
	// 		console.log('error: ', error);
	// 	});

	try {
		// data를 post에 가져오기
		const { data, headers } = await getPosts(params.value);
		// ({ data: posts.value } = await getPosts()); // 다른 표현 방법
		posts.value = data;
		totalCount.value = headers['x-total-count'];
		console.log(pageCount.value);
	} catch (error) {
		console.log(error);
	}
};

// 페이지 변경시 새로 호출 (반응형 데이터 변경 시 새로 호출)
// watch와 다르게 초기 1번 바로 실행함
watchEffect(fetchPosts);

const goPage = id => {
	// router.push(`/posts/${id}`);
	console.log(typeof id);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: '안녕',
		// },
		// hash: '안녕하쇼',
	});
};
</script>

<style lang="scss" scoped></style>
