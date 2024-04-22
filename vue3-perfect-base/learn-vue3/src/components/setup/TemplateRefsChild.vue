<template>
	<!-- 부모 컴포넌트의 속성 -->
	<div>
		{{ $parent }}
	</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('자식컴포넌트의 메세지');
const chileMessage = () => {
	alert(message.value);
};
// script setup에 의해 닫힌 컴포넌트(Template refs나 $parent)를 defineExpose 로 노출
defineExpose({
	message,
});

// export default {
// 	setup() {
// 		const message = ref('자식컴포넌트의 메세지');
// 		const chileMessage = () => {
// 			alert(message.value);
// 		};
// 		return { message, chileMessage };
// 	},
// };
</script>

<style lang="scss" scoped></style>
