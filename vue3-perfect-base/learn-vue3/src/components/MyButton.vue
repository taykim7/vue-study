<template>
	<div class="p-3 bg-danger">
		<!-- <button class="btn btn-primary" type="button" v-bind="$attrs"> -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			my button
		</button>
	</div>
</template>

<script>
export default {
	// root(div)에 이벤트리스너를 상속받는걸 방지
	// inheritAttrs: false,
	// setup(props, { attrs }) {
	setup(props, { emit }) {
		const sayHello = () => {
			emit('click');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
