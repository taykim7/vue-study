<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
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
				<button class="btn btn-primary">수정</button>
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

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		// 객체복사 (주소값을 참조해서 데이터가 변경되도 함께 변함)
		setForm(data);
	} catch (error) {
		console.log(error);
		vAlert(error.message);
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
		// 수정
		await updatePost(id, { ...form.value });
		// 수정 후 바로 상세 페이지
		router.push({ name: 'PostDetail', params: { id } });
		vSuccess('수정이 완료되었습니다.');
	} catch (error) {
		console.log(error);
		vAlert(error.message);
	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
