<template>
  <div>news
    <div v-for=" (item) in ask">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    // this가 Vue 인스턴스(컴포넌트)로 연결하기 위해 vm 정의
    //var vm = this;
    fetchNewsList()
      .then((response)=>{
        console.log(response);
        //vm.users = response.data;
        this.users = response.data;

        // 화살표 함수를 통해 this를 바인딩함
        // 안하면 this는 undefined
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

}
</script>

<style>

</style>