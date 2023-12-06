<template>
  <div>
    FIRST
    <div v-for="(item, index) in users" :key="index">
      {{ item.user }}
    </div>
  </div>
</template>

<script>
import { fetchFirstList } from '../api/index'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    // this가 Vue 인스턴스(컴포넌트)로 연결하기 위해 vm 정의
    var vm = this;

    fetchFirstList()
      .then((response)=>{
        console.log(response);
        vm.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
}
</script>

<style>

</style>