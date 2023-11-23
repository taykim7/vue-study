import Vue from 'vue';

// bus.js
// 빈 이벤트 객체를 통해 컴포넌트간 데이터 전달

// (1) export 첫번째 방법
export const bus = new Vue();
// 받는 쪽에서는 아래처럼 
// import { bus } from './bus.js';

// (2) export 두번째 방법
// export default new Vue();
// 받는 쪽에서는 아래처럼
// import bus from './bus.js';