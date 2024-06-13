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

// axios 컴포저블 함수 적용
const { error, loading, data: form } = useAxios(`/posts/${id}`);

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

const edit = () => {
	execute({
		...form.value,
	});
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
