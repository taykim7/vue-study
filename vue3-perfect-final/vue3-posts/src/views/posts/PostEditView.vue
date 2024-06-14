<template>
	<!-- 데이터 조회 중 -->
	<AppLoading v-if="loading"></AppLoading>

	<!-- 데이터 조회 실패 -->
	<AppError v-else-if="error" :message="error.message"></AppError>

	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />

		<!-- 데이터 수정 실패 -->
		<AppError v-if="editError" :message="editError.message"></AppError>
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary" :disabled="editLoading">
					<!-- 데이터 수정 중 -->
					<template v-if="editLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else>수정</template>
				</button>
			</template></PostForm
		>
		<!-- <AppAlert
			:show="showAlert"
			:message="alertMessage"
			:type="alertType"
		></AppAlert> -->
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
// import AppAlert from '@/components/AppAlert.vue';
import { useAlert } from '@/composables/alert';

import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

// axios 컴포저블 함수 적용1
// 에러 & 로딩 상태, 데이터* 가져오기
// url(/posts/${id})전달
// config와 options은 불필요 (단순 조회)
const { error, loading, data: form } = useAxios(`/posts/${id}`);

// axios 컴포저블 함수 적용2
// 에러 & 로딩 상태, 실행 함수* 가져오기
// url(/posts/${id})과 config전달
// config의 method는 patch로 설정
// options으로는 즉시 실행은 안하고, 호출 성공 및 실패시 호출할 콜백함수 전달.
const {
	error: editError,
	loading: editLoading,
	execute,
} = useAxios(
	`/posts/${id}`,
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('수정이 완료되었습니다.');
			router.push({ name: 'PostDetail', params: { id } });
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);

// '수정' 버튼 클릭시 execute 함수를 통해 수정 api 호출
const edit = () => {
	execute({
		...form.value,
	});
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
