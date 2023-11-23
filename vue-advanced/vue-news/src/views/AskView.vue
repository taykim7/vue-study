<template>
   <div>
    <!-- <ul class="news-list">
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
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
//import { mapGetters } from 'vuex';
//import ListItem from '../components/ListItem.vue'
//import bus from '../utils/bus';

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
    // ...mapGetters({
    //   ask: 'fetchedAsk'
    // })

  },
  created() {
    // 패치를 하는 동안 로딩 띄우기
    // this.$store.dispatch('FETCH_ASK')
    //   .then(() => {
    //     bus.$$emit('end:spinner');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  components: {
    //ListItem,
  }
}
</script>