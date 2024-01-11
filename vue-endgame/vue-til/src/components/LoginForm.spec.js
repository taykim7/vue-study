// import { sum } from './math';

// describe('math.js', () => {
//   test('10+20=30', () => {
//     const result = sum(10, 20);

//     // 30일거라고 예상한다
//     expect(result).toBe(30);
//   });
// });

import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 unsername이 존재', () => {
    const instance = new Vue(LoginForm).$mount();
    expect(instance.username).toBe('');
  });
});