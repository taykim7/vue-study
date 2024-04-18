<template>
	<!-- 다중루트노드 -->
	<label class="form-label" id="child-id">
		{{ label }}
		<!-- v-model 활용 -->
		<!-- <input v-model="username" type="text" /> -->
		<!-- <input
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/> -->
	</label>
	<input v-model="value" type="text" class="form-control" />
</template>

<script>
import { computed } from 'vue';

export default {
	// vue3에서는 modelValue로 받고 update:modelValue로 이벤트 발생
	props: ['modelValue', 'label'], // 이건 value 느낌
	emits: ['update:modelValue'], // 이건 input 느낌
	setup(props, { emit }) {
		// computed 활용
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
