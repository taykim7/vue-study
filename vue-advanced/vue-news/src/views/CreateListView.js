import ListView from './ListView.vue'
import bus from '../utils/bus';

// 하이오너 컴포넌트
// 비슷한 컴포넌트를 재활용함
export default function createListView(name) {
  // export default로 잽다 function을 하나 꺼내는 것
  return {
    // 재사용할 인스턴스, 컴포넌트 옵션들이 들어갈 곳
    //name,
    name: 'HOC COMPONENT ' + name,
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
    },
    render(createElement) {
      return createElement(ListView);
    },
  }
}