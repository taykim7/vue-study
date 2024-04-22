<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" />
		<button @click="visible = !visible">자식 컴포넌트 on/off</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		// 부모 컴포넌트가 먼저 생성되고 자식 컴포넌트가 생성된다.
		// 그리고 자식 컴포넌트가 완료된 후 부모 컴포넌트가 완료된다.
		LifecycleChild,
	},
	// Creation 생성 단계
	setup() {
		console.log('setup');
		// DOM 가져오기
		const inputRef = ref(null);

		// Mounting 삽입 단계
		onBeforeMount(() => {
			console.log('onBeforeMount', inputRef.value);
			// 마운트 직전이라 DOM 접근 불가능
		});
		onMounted(() => {
			console.log('onMounted', inputRef.value);
			// 마운트 후라서 DOM 접근 가능
			// + 모든 자식 컴포넌트가 mounted 되었다는걸 의미함
		});

		// Updating 변경 단계
		const message = ref('');
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate', message.value);
			console.log(
				'DOM Content: ',
				document.querySelector('#message').textContent,
			);
			// DOM 트리 업데이트 직전이라 DOM 접근 불가능
		});
		onUpdated(() => {
			console.log('onUpdated', message.value);
			console.log(
				'DOM Content: ',
				document.querySelector('#message').textContent,
			);
			// DOM 트리 업데이트 후라서 DOM 접근 가능
		});

		// Destruction 소멸 단계 (자식 컴포넌트에서 작성)
		const visible = ref(false);

		return { inputRef, message, visible };
	},

	// ------------options API-------------
	data: () => ({
		dataMessage: 'dataMessage',
	}),
	beforeCreate() {
		console.log('beforeCreate', this.dataMessage);
		// DOM 생성 전이라 data에 접근 불가능
	},
	created() {
		console.log('created', this.dataMessage);
		// DOM 생성 전이라 data에 접근 가능
	},
};
</script>

<style lang="scss" scoped></style>
