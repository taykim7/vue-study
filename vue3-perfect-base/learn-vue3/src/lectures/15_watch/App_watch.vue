<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('');

		watch(message, (newValue, oldValue) => {
			// DOM을 조작하거나
			// API를 호출해서 state를 변경할 때 사용
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});
		return {
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
