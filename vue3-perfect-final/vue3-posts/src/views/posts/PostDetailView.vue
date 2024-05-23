<template>
	<div>
		<!-- <p>params는 {{ $route.params }}</p>
		<p>query는 {{ $route.query }}</p>
		<p>hash는 {{ $route.hash }}</p> -->
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
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
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	// useRoute,
	useRouter,
} from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// props: true 라우터 설정으로 props를 받아옴
// 기존에 route.params로 가져온 id는 주석처리

const props = defineProps({
	id: Number,
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

const form = ref({});
// const form = reactive({});
// form.title = data.title;
// form.content = data.content;

const fetchPost = () => {
	const data = getPostById(props.id);
	// 객체복사 (주소값을 참조해서 데이터가 변경되도 함께 변함)
	form.value = { ...data };
};
fetchPost();

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
