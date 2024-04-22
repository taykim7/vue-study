<template>
	<div class="container py-4">
		{{ msg }}
		<input v-model="message" type="text" />
		<button @click="sayHello">버튼</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>

		<hr />

		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child }}</template>

		<hr />

		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

// setup() 이 컴파일됨... 문법적 설탕
const msg = '메세지';
const message = ref('');
const sayHello = () => {
	alert('메세집니다');
};
const child = ref(null);
// script setup에 의해 닫힌 컴포넌트(Template refs나 $parent)를 defineExpose 로 노출
defineExpose({
	msg,
});
// const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
// console.log('response: ', response);
</script>

<style lang="scss" scoped></style>
