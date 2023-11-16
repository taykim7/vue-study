<template>
   <div>
    <ul class="news-list">
      <li v-for="(item) in ask" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
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
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {

    // this.$store.state.ask
    // 이렇게 state를 가져오는 건 너무 길고 가독성 떨어짐
    // 간단하게 바꾸기
    
    // 1. 간단
    // ask() {
    //   return this.$store.state.ask;
    // }

    // 2. mapState 활용
    // ...mapState({
    //   ask: state => state.ask
    // })

    // 3. getter 활용
    ...mapGetters({
      ask: 'fetchedAsk'
    })

  },
  created() {
    this.$store.dispatch('FETCH_ASK')
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