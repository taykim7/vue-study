<template>
	<main>
		<div class="container py-4">
			<!-- <MyButton @click="sayHello"></MyButton> -->
			<MyButton @click="sayHello"></MyButton>
			<LabelInput label="이름"></LabelInput>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		MyButton,
		LabelInput,
	},
	setup() {
		// click 이벤트도 자식컴포넌트에 상속된다
		const sayHello = () => {
			alert('안녕');
			// 두번 출력된다..
			// 왜냐면 non-prop 속성으로 인해
			// 자식에서는 inheritAttrs 설정을 안했을 때
			// 자식의 root에 바인딩되서 버튼, div에 대한 이벤트가 발생한다.
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
