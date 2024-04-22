<template>
	<div class="p-3 bg-danger">
		<!-- <button class="btn btn-primary" type="button" v-bind="$attrs"> -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			{{ message }}
		</button>
	</div>
</template>

<script>
export default {
	// root(div)에 이벤트리스너를 상속받는걸 방지
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';
const message = ref('버튼이에오');
</script>

<style lang="scss" scoped></style>
