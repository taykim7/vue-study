<template>
	<nav class="mt-5" aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<!-- 이전 -->
			<li class="page-item">
				<a
					class="page-link"
					:class="isPrevPage"
					href="#"
					@click.prevent="$emit('page', currentPage - 1)"
					>Previous</a
				>
			</li>
			<!-- 현재 -->
			<li
				v-for="page in pageCount"
				:key="page"
				class="page-item"
				:class="{ active: currentPage === page }"
			>
				<a class="page-link" href="#" @click.prevent="$emit('page', page)">
					{{ page }}
				</a>
			</li>
			<!-- 다음 -->
			<li class="page-item" :class="isNextPage">
				<a
					class="page-link"
					href="#"
					@click.prevent="$emit('page', currentPage + 1)"
					>Next</a
				>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	currentPage: {
		type: Number,
		requied: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
});
defineEmits(['page']);

const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }));
const isNextPage = computed(() => ({
	disabled: !(props.currentPage < props.pageCount),
}));
</script>

<style lang="scss" scoped></style>
