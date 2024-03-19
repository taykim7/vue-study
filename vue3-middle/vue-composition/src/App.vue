<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">번역</button>
  </div>
</template>

<script>
// import { ref } from 'vue';
import { useMessage } from './hooks/useMessage';

  export default {
    // data() {
    //   return {
    //     message: '안녕'
    //   }
    // },
    // methods: {
    //   changeMessage() {
    //     this.message = 'Hi'
    //   } 
    // }   
    setup() {
      // // data의 역할
      // const message = ref('안녕');
      // // methods의 역할 (함수 선언문)
      // function changeMessage() {
      //   message.value = 'Hi';
      // }

      // 컴포저블로 코드 재사용
      const { message, changeMessage } = useMessage();
      return {
        message,
        changeMessage
      }
    } 
  }
</script>

<style lang="scss" scoped>

</style>