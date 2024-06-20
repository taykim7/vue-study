<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />

		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
			@update:limit="changeLimit"
		></PostFilter>

		<hr class="my-4" />

		<!-- 데이터 조회 중 -->
		<AppLoading v-if="loading"></AppLoading>

		<!-- 데이터 조회 실패 -->
		<AppError v-else-if="error" :message="error.message"></AppError>

		<!-- 검색 결과 없음 -->
		<template v-else-if="!isExist">
			<p class="text-center py-5 text-muted">검색 결과 없음</p>
		</template>

		<!-- 데이터 조회 성공 -->
		<template v-else>
			<AppGrid :items="posts" col-class="col-12 col-sm-6 col-md-4 col-lg-3">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
						@preview="selctPreview(item.id)"
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

		<template v-if="previewId">
			<hr class="my-5" />
			<AppCard>
				<!-- router의 파라미터에 의존적이었지만 props: true 라우터 설정으로 속성을 전달할 수 있게 되었따 -->
				<PostDetailView :id="previewId"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();

const previewId = ref(null);
const selctPreview = id => {
	previewId.value = id;
};

// 데이터 조회 필터
const params = ref({
	// (1) 정렬 기준 등록일 기준, 내림차순
	_sort: 'createdAt',
	_order: 'desc',
	// (2) 조회 개수
	_limit: 6,
	// (3) 페이지
	_page: 1,
	// (4) 타이틀 필터
	title_like: '',
});

// axios 컴포저블 함수 적용
// 에러 & 로딩 상태, 데이터* 가져오기
// url(/posts)과 config전달
// config의 method는 default로 생략(get)
// 별도 options 불필요해서 생략  (단순 조회)

// config의 params로 데이터 조회필터 전달
// 가져온 data는 posts에 할당
const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });

// 검색 결과 유무 조회
const isExist = computed(() => posts.value && posts.value.length > 0);

// pagination - 페이지 수 = 전체개수/조회개수 (올림)
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const goPage = id => {
	console.log(typeof id);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

// 검색 필터 갯수 변경 시 초기화
const changeLimit = value => {
	params.value.value_limit = value;
	params.value._page = 1;
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
