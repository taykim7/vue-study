// mixin
import bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
  created() {
    // 패치를 하는 동안 로딩 띄우기
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// hoc
// export default function create() {
//   // 재사용할 컴포넌트 옵션
// }