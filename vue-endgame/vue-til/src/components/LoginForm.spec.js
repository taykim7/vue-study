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

// shallowMount에 data를 만들 수 있음
// 특정 html 태그를 찾는 find 활용
// 컴포넌트의 computed 값 (isUsernameValid) 확인
// 이메일 형식이 아닐 경우 warning class가 생겨서 .warning을 확인

describe('LoginForm.vue', () => {
  // 테스트1
  test('ID가 이메일 형식이 아니면 경고메세지가 출력됨', () => {
    const wrapper = shallowMount(LoginForm, {
      data() { 
        return {
          username: '틀린이메일',
        };
      }
    });

    const idInput = wrapper.find('#username');
    console.log('input 값 : ', idInput.element.value);
    console.log('이메일 형식인가요 : ', wrapper.vm.isUsernameValid);

    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  // 테스트2
  test('id pw 입력하지 않으면 로그인 버튼 비활성화', () => {
    const wrapper = shallowMount(LoginForm, {
      data() { 
        return {
          username: '',
          password: '',
        };
      }
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});