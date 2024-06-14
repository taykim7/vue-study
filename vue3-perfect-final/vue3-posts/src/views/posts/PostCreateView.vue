<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<!-- 데이터 등록 실패 -->
		<AppError v-if="error" :message="error.message"></AppError>
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>

				<button class="btn btn-primary" :disabled="loading">
					<!-- 데이터 등록 중 -->
					<template v-if="loading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else>저장</template>
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

// axios 컴포저블 함수 적용
// 에러 & 로딩 상태, 실행 함수* 가져오기
// url(/posts)과 config전달
// config의 method는 post로 설정
// options으로는 즉시 실행은 안하고, 호출 성공 및 실패시 호출할 콜백함수 전달.
const { error, loading, execute } = useAxios(
	'/posts',
	{
		mehtod: 'post',
		data: { ...form.value, createdAt: Date.now() },
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			vSuccess('등록이 완료되었습니다.');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
// '저장' 버튼 클릭시 execute 함수를 통해 저장 api 호출
const save = async () => {
	execute({ ...form.value, createdAt: Date.now() });
};

// const save = async () => {
// 	try {
// 		loading.value = true;
// 		// 생성api
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		});
// 		// 등록이 성공되면 리스트로 이동
// 		router.push({ name: 'PostList' });
// 		vSuccess('등록이 완료되었습니다.');
// 	} catch (err) {
// 		vAlert(err.message);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

const goListPage = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped></style>
