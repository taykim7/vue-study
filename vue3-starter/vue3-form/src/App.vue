<template>
  <div>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="userId">아이디:</label>
        <input id="userId" type="text" v-model="username">
      </div>
      <div>
        <label for="password">비번:</label>
        <input id="password" type="text" v-model="password">
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    // data
    var username = ref('');
    var password = ref('');

    // methods
    var submitForm = () => {
      // fake api
      axios.post('https://jsonplaceholder.typicode.com/users/', {
        username: username.value,
        password: password.value,
      })
        .then(response => {
          console.log(response);
        })
    }

    // 사용하고자하는 것들을 인스턴스 옵션으로 보냄
    return {
      username,
      password,
      submitForm
    }
  }

  // data() {
  //   return {
  //     username: '',
  //     password: '',
  //   }
  // },
  // methods: {
  //   submitForm() {
  //     // submit의 기본 동작인 새로고침을 제어
  //     // event.preventDefault();
  //     // 이벤트 대신에 @submit.prevent 로 똑같이 막을 수 있음.

  //     const data = {
  //       username: this.username,
  //       password: this.password,
  //     }
  //     // fake api
  //     axios.post('https://jsonplaceholder.typicode.com/users/', data)
  //     .then(response => {
  //       console.log(response);
  //     })
  //   }
  //   }
}

</script>

<style scoped>

</style>