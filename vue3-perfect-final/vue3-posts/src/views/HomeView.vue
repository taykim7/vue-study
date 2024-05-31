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
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const items = ref(['사과', '바나나', '딸기', '수박']);
</script>

<style lang="scss" scoped></style>
