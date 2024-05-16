<template>
	<div>
		<h2>HomeView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			어바웃으로 이동 (setup에서 router 활용)
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
