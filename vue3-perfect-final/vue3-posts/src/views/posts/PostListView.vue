<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />

		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>

		<hr class="my-4" />

		<!-- 데이터 조회 중 -->
		<AppLoading v-if="loading"></AppLoading>

		<!-- 데이터 조회 실패 -->
		<AppError v-else-if="error" :message="'Error!!!'"></AppError>

		<!-- 데이터 조회 성공 -->
		<template v-else>
			<AppGrid :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
					></PostItem>
				</template>
			</AppGrid>
			<AppPagination
				:current-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			></AppPagination>
		</template>

		<!-- 모달을 저 멀리 보내자 -->
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="'modalTitle'"
				:content="modalContent"
				:created-at="modalCreatedAt"
			>
			</PostModal>
		</Teleport>

		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
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
// import AppCard from '@/components/AppCard.vue';
// import AppPagination from '@/components/AppPagination.vue';
// import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const router = useRouter();
const posts = ref([]);
const error = ref(null);
const loading = ref(false);
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
		loading.value = true;
		// data를 post에 가져오기
		const { data, headers } = await getPosts(params.value);
		// ({ data: posts.value } = await getPosts()); // 다른 표현 방법
		posts.value = data;
		totalCount.value = headers['x-total-count'];
		console.log(pageCount.value);
	} catch (err) {
		error.value = err;
	} finally {
		loading.value = false;
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

// modal
const show = ref(false);
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};

const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
</script>

<style lang="scss" scoped></style>
