<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	// vue3에서는 modelValue로 받고 update:modelValue로 이벤트 발생
	// props: ['modelValue', 'label'],
	// emits: ['update:modelValue'],
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		// computed 활용
		const value = computed({
			get() {
				// return props.modelValue;
				return props.title;
			},
			set(value) {
				// emit('update:modelValue', value);
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
