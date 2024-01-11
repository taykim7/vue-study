<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
          <button type="submit" :disabled="!isUserNameValid || !password || !nickname">
            가입
          </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
// import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
    logMessage() {
      return this.$store.state.message;
    }
  },
  methods: {
      async submitForm() {
        try {
          const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        }
        await this.$store.dispatch('REGISTER', userData);
        } catch (error) {
          console.log(error);
        }
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