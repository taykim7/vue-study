<template>
	<main>
		<div class="container py-4">
			<!-- <MyButton @click="sayHello"></MyButton> -->
			<MyButton @click="sayHello"></MyButton>
			<LabelInput label="이름"></LabelInput>

			<hr />

			<!-- slot 적용 -->
			<FancyButton>
				클릭해라
				<span style="color: red">슬롯버튼</span>
			</FancyButton>
			<FancyButton></FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>

			<hr />

			<AppCard>
				<!-- 1. slot 기본 사용 -->
				<!-- <template v-slot:header>제목이요</template>
				<template v-slot:default>디폴트 슬롯</template>
				<template v-slot:footer>푸터요</template> -->

				<!--  2. slot 단축표현 사용 '#' -->
				<!-- <template #header>제목이요</template> -->

				<!-- 3. slot 동적으로 사용 -->
				<!-- <template #[slotArgs]>동적인 제목이요</template> -->

				<!-- 4. default 는 암시적으로 사용 가능 -->
				<!-- 암시적인 디폴트 슬롯 -->

				<!-- 5. 부모 -> 자식 slot으로 데이터 전달 -->
				<!-- <template #default>{{ message }}</template> -->

				<!-- 6. 자식 slot에서 작성한 메세지 수신 -->
				<!-- <template #header="{ headerMessage }">{{ headerMessage }}</template>
				<template #default="{ childMessage }">{{ childMessage }}</template>
				<template #footer="{ footerMessage }">{{ footerMessage }}</template> -->

				<!-- 7. v-if="$slots.header" 를 통해 선택적으로 렌더 -->
				<!-- 8. 자식컴포넌트에서 setup의 slot에 접근하여 footer 확인 -->
				<template #default="{ childMessage }">{{ childMessage }}</template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
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
		const slotArgs = ref('header');
		const message = ref('상위에서 작성한 메세지');

		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
