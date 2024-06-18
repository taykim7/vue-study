<template>
	<div>
		<h2>AboutView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			홈으로 이동 (router객체를 활용한 이동)
		</button>

		<hr />

		<h2>Store 테스트</h2>
		<p>state의 counter: {{ store.counter }}</p>
		<p>구조분해할당 counter: {{ counter }}</p>
		<p>getters의 doubleCount: {{ store.doubleCount }}</p>
		<button @click="increment()">action(increment)</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route의 패스는 ', route.path);

// store로부터 데이터 가져오기
const store = useCounterStore();
// 반응성을 유지한 채 구조분해할당하기 (toRefs처럼 storeToRefs를 사용하면 된다.)
const { counter } = storeToRefs(store);
// actions는 그냥 가져오면 된다.
const { increment } = store;
// pinia에서는 state를 바로 수정할 수 있다.
counter.value = 100;
</script>

<style lang="scss" scoped></style>
