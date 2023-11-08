<template>
   <div>jobs</div>
</template>

<script>
import { fetchJobsList } from '../api/index'
export default {
   data() {
      return {
         jobs: [],
      }
   },
  created() {
    var vm = this;
    fetchJobsList()
      .then((response)=>{
        console.log(response);
        vm.ask = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
</script>

<style>

</style>