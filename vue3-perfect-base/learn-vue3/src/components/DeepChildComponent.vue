<template>
	<div class="card">
		<div class="card-header">Deep 자식 헤드</div>
		<div class="card-body">
			<p>{{ staticMessage }}</p>
			<p>{{ message }}</p>
			<p>{{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		// inject로 조상 컴포넌트로부터 데이터를 받음
		const staticMessage = inject('static-message', '디폴트 메세지');
		const { message, updateMessage } = inject('message');
		// 변경할 수 있는 메서드도 함께 받음
		updateMessage('(변경됨)');
		const count = inject('count');
		return { staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
