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

    <!-- <ul class="news-list">
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
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus';

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
    //this.$store.dispatch('FETCH_NEWS')

    // bus로 emit을 통해 이벤트를 전송
    //bus.$emit('start:spinner');
    //bus.$emit('end:spinner');

    // 패치를 하는 동안 로딩 띄우기
    this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        bus.$$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // ListItem.vue 활용
  components: {
    ListItem,
  }
}
</script>

<style scoped>
  /* .news-list {
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
  } */
</style>