<template>
	<div class="card">
		<!-- header라는 슬롯이 정의되어야 렌더하겠다. -->
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="자식의 헤더 메세지">header 슬롯</slot>
		</div>
		<!-- header라는 슬롯이 정의되어야 렌더하겠다. -->
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage">body 슬롯</slot>
		</div>
		<!-- header라는 슬롯이 정의되어야 렌더하겠다. -->
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="자식의 푸터 메세지">footer 슬롯</slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('자식에서 작성한 메시지');
		// setup에서 slot접근, footer가 있ㄴ느지 확인
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
