// mixin
// 믹스인을 호출한 컴포넌트에서 재사용된다
export default {
  // 재사용할 컴포넌트 옵션
  created() {
    // 패치
    this.$store.dispatch('FETCH_MIXIN_LIST', this.$route.name);
  }
}