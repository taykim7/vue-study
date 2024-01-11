// import { sum } from './math';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

// 1. 테스트용 테스트
// describe('math.js', () => {
//   test('10+20=30', () => {
//     const result = sum(10, 20);

//     // 30일거라고 예상한다
//     expect(result).toBe(30);
//   });
// });

// 2. 기본 테스트
// describe('LoginForm.vue', () => {
//   test('컴포넌트가 마운팅되면 unsername이 존재', () => {
//     const instance = new Vue(LoginForm).$mount();
//     expect(instance.username).toBe('');
//   });
// });

// 3. test-utils 활용한 테스트
// describe('LoginForm.vue', () => {
//   test('컴포넌트가 마운팅되면 unsername이 존재', () => {
//     const wrapper = shallowMount(LoginForm);
//     expect(wrapper.vm.username).toBe('');
//   });
// });

// ================================
