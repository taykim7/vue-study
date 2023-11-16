<template>
  <div>
    <!-- <p v-for="(item) in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.user }} by 
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p> -->

    <ul class="news-list">
      <li v-for="(item) in this.$store.state.news" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
        </small>
        </div>
      </li>
    </ul>
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

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
</style>