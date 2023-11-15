<template>
  <div>
    <p>
      이름 : {{ userInfo.id}}
    </p>
    <p>
      카르마 : {{ userInfo.karma}}
    </p>
    <p>
      언제 : {{ userInfo.created}}
    </p>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    } 
  },
  created() {
    const userName = this.$route.params.id;
    //axios.get(`https://api.hnpwa.com/v0/user/${this.userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>