<template>
    <div>Third의 공통컴포넌트
    <ul>
      <li v-for="(item, index) in listItem" :key="index">
        <!-- 가져온 state를 표시 -->
        {{ item }}
        <!-- 여기서 또 분기처리도 가능~! -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    // 넘어온 path로 구별하여 각기 다른 action을 호출한다.
    if (this.$route.path === '/thirdone') {
      this.$store.dispatch('FETCH_THIRD_ONE');
    } else if (this.$route.path === '/thirdtwo') {
      this.$store.dispatch('FETCH_THIRD_TWO');
    } else if (this.$route.path === '/thirdthree') {
      this.$store.dispatch('FETCH_THIRD_THREE');
    } 
  },
  computed: {
    listItem() {
      // 등록한 name을 구분하여 각기 다른 state를 가져온다.
      if (this.$route.name === 'one') {
        return this.$store.state.one;
      } else if (this.$route.name === 'two') {
        return this.$store.state.two;
      } else if (this.$route.name === 'three') {
        return this.$store.state.three;
      } else return ''
    }
  }
}
</script>

<style>

</style>