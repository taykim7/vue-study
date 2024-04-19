<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">provideInject 컴포넌트</div>
			<div class="card-body">
				<button @click="count++">카운트 올리기</button>
				<p>앱메세지: {{ appMessage }}</p>
				<ChildComponent></ChildComponent>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, provide, readonly, inject } from 'vue';
import ChildComponent from './ChildComponent.vue';
export default {
	components: {
		ChildComponent,
	},
	setup() {
		const staticMessage = '스태틱 메세지';
		const message = ref('반응형 메세지');
		const count = ref(10);

		// 변경할 수 있는 메서드
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};

		// provide로 자손에게 전달
		// provide('static-message', staticMessage);

		// 변경 메서드와 readonly 속성 추가
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		// App-level Provide
		const appMessage = inject('app-message');

		// global property2
		const msg = inject('msg');
		console.log(msg);
		return { count, appMessage };
	},
	mounted() {
		// global property1
		console.log(this.msg); // => 글로벌 컴포넌트
		// 하지만 setup에서는 접근할 수 없음..
	},
};
</script>

<style lang="scss" scoped></style>
