<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
	</div>

	<hr />

	<ul>
		<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
		<li
			v-for="fruit in fruits"
			:key="fruit"
			:ref="el => itemRefs.push(el.textContent)"
		>
			{{ fruit }}
		</li>
	</ul>

	<hr />

	<TemplateRefsChild ref="child"></TemplateRefsChild>
</template>

<script>
import TemplateRefsChild from './TemplateRefsChild.vue';
import { ref, onMounted } from 'vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		// Template refs
		const input = ref(null);
		console.log('setup되었음 ', input.value); // null
		onMounted(() => {
			input.value = '어쩌구저쩌구';
			console.log('onMounted되었음 ', input.value);
			// v-for 내부 ref에 의해 마운트된 후에 요소 배열로 채워짐
			// itemRefs.value.forEach(item => console.log(item.textContent));
			itemRefs.value.forEach(item => console.log(item));

			// 자식 컴포넌트의 속성과 메서드
			console.log('child.message: ', child.value.message);
			child.value.chileMessage();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		// v-for 내부 ref에 의해 마운트된 후에 요소 배열로 채워짐
		const itemRefs = ref([]);

		const child = ref(null);

		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
