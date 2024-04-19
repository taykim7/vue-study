<template>
	<button class="fancy-btn">
		<slot :fancy-message="fancyMessage">기본 콘텐츠</slot>
	</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const fancyMessage = ref('Facny Message');
		return { fancyMessage };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
