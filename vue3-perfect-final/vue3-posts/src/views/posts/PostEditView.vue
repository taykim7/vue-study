<template>
	<!-- 데이터 조회 중 -->
	<AppLoading v-if="loading"></AppLoading>

	<!-- 데이터 조회 실패 -->
	<AppError v-else-if="error" :message="error.message"></AppError>

	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />

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
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
// import AppAlert from '@/components/AppAlert.vue';
import { useAlert } from '@/composables/alert';

import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const loading = ref(false);
const error = ref(null);
const editLoading = ref(false);
const editError = ref(null);

const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(id);
		// 객체복사 (주소값을 참조해서 데이터가 변경되도 함께 변함)
		setForm(data);
	} catch (err) {
		vAlert(err.message);
		error.value = err;
	} finally {
		loading.value = false;
	}
};

// 원하는 데이터만 받도록 설정
const setForm = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};

fetchPost();

// 수정
const edit = async () => {
	try {
		editLoading.value = true;
		// 수정
		await updatePost(id, { ...form.value });
		// 수정 후 바로 상세 페이지
		router.push({ name: 'PostDetail', params: { id } });
		vSuccess('수정이 완료되었습니다.');
	} catch (err) {
		vAlert(err.message);
		editError.value = err;
	} finally {
		editLoading.value = false;
	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
