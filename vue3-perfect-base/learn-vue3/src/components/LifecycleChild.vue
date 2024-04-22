<template>
	<div class="card">
		<div class="card-body">LifeCycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
export default {
	setup() {
		console.log('[Child] setup');
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});
		onMounted(() => {
			console.log('[Child] onMounted');
		});
		// Destruction 소멸 단계
		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
			// 마운트를 해제하기 직전이라 DOM 호출 가능
		});
		onUnmounted(() => {
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
			// 마운트를 해제 후 라 DOM 호출 불가능
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
