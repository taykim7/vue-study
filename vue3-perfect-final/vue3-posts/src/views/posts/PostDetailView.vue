<template>
	<div>
		<!-- <p>params는 {{ $route.params }}</p>
		<p>query는 {{ $route.query }}</p>
		<p>hash는 {{ $route.hash }}</p> -->
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />
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
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	// useRoute,
	useRouter,
} from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

// props: true 라우터 설정으로 props를 받아옴
// 기존에 route.params로 가져온 id는 주석처리

const props = defineProps({
	id: String,
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

const post = ref({});
// const form = reactive({});
// form.title = data.title;
// form.content = data.content;

const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		// 객체복사 (주소값을 참조해서 데이터가 변경되도 함께 변함)
		setPost(data);
	} catch (error) {
		console.log(error);
	}
};

// 원하는 데이터만 받도록 설정 (다른 데이터로 문제가 생길 수 있으니!)
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

fetchPost();

// 제거
const remove = async () => {
	try {
		// 안티패턴 - 뎁스가 깊어지지 않도록(컨벤션에 따라 다름)
		// 다른 예로 ! 를 === true 이런식으로 교체 가능 (훨씬 직관적이니까)
		if (confirm('삭제할래?') === false) {
			return;
		}
		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.log(error);
	}
};
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
