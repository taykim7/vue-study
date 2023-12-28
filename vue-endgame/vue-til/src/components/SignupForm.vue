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
    <button type="submit">가입</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
      submitForm() {
        alert('폼제출')
      }
  }
}
</script>

<style>

</style>