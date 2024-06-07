<template>
	<div>
		<h2>HomeView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			어바웃으로 이동 (setup에서 router 활용)
		</button>
		<hr />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-2">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<h2>{{ $person.name }}</h2>
		<button class="btn btn-primary" @click="person.say">
			inject된 인스턴스
		</button>
	</div>
</template>

<script>
export default {
	created() {
		// console.log('created');
		// this.$person.say();
		// console.log(this.$person.name); // 테이
	},
};
</script>
<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '바나나', '딸기', '수박']);

// setup에서 컴포넌트 인스턴스 가져오기
const person = inject('person');
console.log(person.name);
</script>

<style lang="scss" scoped></style>
