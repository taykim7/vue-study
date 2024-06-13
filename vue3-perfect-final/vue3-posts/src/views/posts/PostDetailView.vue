<template>
	<!-- 데이터 조회 중 -->
	<AppLoading v-if="loading"></AppLoading>

	<!-- 데이터 조회 실패 -->
	<AppError v-else-if="error" :message="error.message"></AppError>

	<div v-else>
		<!-- <p>params는 {{ $route.params }}</p>
		<p>query는 {{ $route.query }}</p>
		<p>hash는 {{ $route.hash }}</p> -->
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm') }}
		</p>
		<hr class="my-4" />
		<!-- 데이터 삭제 실패 -->
		<AppError v-if="removeError" :message="removeError.message"></AppError>
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-danger"
					@click="remove"
					:disabled="removeLoading"
				>
					<!-- 데이터 삭제 중 -->
					<template v-if="removeLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else>삭제</template>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	// useRoute,
	useRouter,
} from 'vue-router';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';
import { useAlert } from '@/composables/alert';

// props: true 라우터 설정으로 props를 받아옴
// 기존에 route.params로 가져온 id는 주석처리

const props = defineProps({
	id: [String, Number],
});

// const route = useRoute();
const router = useRouter();
// const id = route.params.id;

/**
 * ref 로 반응형 선언시 → 한꺼번에 객체 할당이 가능 (form = {...data})
 * 접근하려면 form.value.title
 * ref는 레퍼런스도 가능 프리미티브도 가능해서 일관성 유지할 수 있음
 *
 * reactive 로 반응형 선언할 시 → 한꺼번에 객체 할당하면 반응형을 잃음 (form.title = data.title 로 하나씩해야함)
 * 접근하려면 그냥 form.title
 * reactive는 레퍼런스만 가능
 */

// axios 컴포저블 함수 적용
const { error, loading, data: post } = useAxios(`/posts/${props.id}`);
const { vAlert, vSuccess } = useAlert();

const {
	error: removeError,
	loading: removeLoading,
	execute,
} = useAxios(
	`/posts/${props.id}`,
	{ mehtod: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('삭제가 완료되었습니다');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);

// 제거
const remove = () => {
	// 안티패턴 - 뎁스가 깊어지지 않도록(컨벤션에 따라 다름)
	// 다른 예로 ! 를 === true 이런식으로 교체 가능 (훨씬 직관적이니까)
	if (confirm('삭제할래?') === false) {
		return;
	}
	execute();
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
