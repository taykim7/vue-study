<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
// import { loginUser } from '@/api/index';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
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

        // const {data} = await loginUser(userData);
        // console.log(data.token)
        // this.$store.commit('setToken', data.token);
        // this.$store.commit('setUsername', data.user.username);
        // saveAuthToCookie(data.token);
        // saveUserToCookie(data.user.username);

        // action 속성으로 대체
        await this.$store.dispatch('LOGIN', userData);

        // 로그인시 메인페이지로 push
        this.$router.push('/main');
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
    },
    
    
  }
}
</script>

<style>

</style>