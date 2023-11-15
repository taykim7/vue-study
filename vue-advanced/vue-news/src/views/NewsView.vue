<template>
  <div>
    <p v-for="(item) in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.user }} by 
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>

export default {
  created() {
    // ▼ this가 Vue 인스턴스(컴포넌트)로 연결하기 위해 vm 정의
    // var vm = this;
    // fetchNewsList()
    //   .then((response)=>{
    //     console.log(response);
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    
    // ▼ dispatch를 통해 코드 제어 넘기기
    this.$store.dispatch('FETCH_NEWS')
  }

}
</script>

<style>

</style>