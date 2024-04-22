<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp"></component>
		<hr />
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// 동적으로 컴포넌트 변경 (shallowRef가 퍼포먼스가 더 좋다)
// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple);
const changeCurrentComp = comp => {
	currentComp.value = comp;
};

const obj1 = ref({ name: '김테이' });
const obj2 = shallowRef({ name: '테이킴' });

// ref는 obj2.value.name에 반응함 (속성에 반응)
// shallowRef는 obj2.value.name에 반응안함 (속성에 반응 안함)
// obje.value에만 반응한다. ( 값 자체만 반응)
</script>

<style lang="scss" scoped></style>
