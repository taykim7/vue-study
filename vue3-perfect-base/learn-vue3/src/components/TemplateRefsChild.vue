<template>
	<!-- 부모 컴포넌트의 속성 -->
	<div>
		{{ $parent }}
	</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('자식컴포넌트의 메세지');
		const chileMessage = () => {
			alert(message.value);
		};
		return { message, chileMessage };
	},
};
</script>

<style lang="scss" scoped></style>
