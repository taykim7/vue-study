<template>
   <div>news
    <!-- 0. 무식하게 연결 -->
    <!-- <div v-for=" (item) in this.$store.state.ask"> -->
    
    <!-- 1, 2, 3 좀 더 간단하게 연결 -->
    <div v-for=" (item) in ask">
      {{ item.title }}
    </div>
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

<style>

</style>