<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아디 : </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">비번 : </label>
      <input id="password" type="text" v-model="password">
    </div>
    <div>
      <label for="nickname">닉넴 : </label>
      <input id="nickname" type="text" v-model="nickname">
    </div>
    <button type="submit" :disabled="!isUserNameValid || !password || !nickname">가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    }
  },
  methods: {
      async submitForm() {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        }
        // const response = await registerUser(userData); 
        // Destructuring 구조분해로 더 간단하게
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username} 님이 가입되었습니다.`;
        this.initForm();
      },
      initForm() {
        this.username = '';
        this.password = '';
        this.nickname = '';
      }
  }
}
</script>

<style>

</style>