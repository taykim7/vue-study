<template>
	<div class="card">
		<div class="card-header">자식 헤드</div>
		<div class="card-body">
			<DeepChildComponent></DeepChildComponent>
		</div>
	</div>
</template>

<script>
import DeepChildComponent from './DeepChildComponent.vue';
export default {
	components: {
		DeepChildComponent,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
