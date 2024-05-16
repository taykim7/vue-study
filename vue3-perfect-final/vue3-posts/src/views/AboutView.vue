<template>
	<div>
		<h2>AboutView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			홈으로 이동 (router객체를 활용한 이동)
		</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route의 패스는 ', route.path);
</script>

<style lang="scss" scoped></style>
