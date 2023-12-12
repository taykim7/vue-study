// script로만 이루어짐
// 함수형 기반의 재사용 방식이기 때문에

import HocListView from './HocListView.vue'

// export default로 냅다 function을 하나 꺼내는 것
export default function createListView(name) {
  return {
    // 재사용할 인스턴스, 컴포넌트 옵션들이 들어갈 곳
    name,
    created() {
      // 패치
      this.$store.dispatch('FETCH_HOC_LIST', this.$route.name);
    },
    render(createElement) {
      return createElement(HocListView);
    },
  }
}