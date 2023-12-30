<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디 : </label>
      <input id="username" type="text" v-model="username"/>
    </div>
    <div>
      <label for="password">패스워드 : </label>
      <input id="password" type="text" v-model="password"/>
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const {data} = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username}님 환용해요`
      } catch (error) {
        // 에러 핸들링 코드
        this.logMessage=`${error.response.data}`
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    } 
  }
}
</script>

<style>

</style>