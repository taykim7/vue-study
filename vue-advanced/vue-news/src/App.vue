<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <!-- 로딩바 -->
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus'

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      // 로딩 상태
      loadingStatus: false, 
    }
  },
  created() {
    // bus를 통해 이벤트를 받음
    bus.$on('start:spinner', this.startSpinner );
    bus.$on('end:spinner', this.endSpinner );
    // .env
    console.log(process.env.VUE_APP_TITLE); // .env 속 HELLO가 출력
    
  },
  methods: {
    // 로딩 상태를 컨트롤할 수 있도록 명시적 메서드를 활용
    startSpinner() {
      console.log('스피너 시작')
      this.loadingStatus = true;
    },
    endSpinner() {
      console.log('스피너 끝')
      this.loadingStatus = false;
    }
  },
  beforeDestroy() {
    // **이벤트를 등록하면 계속 쌓이기 때문에 꼭 종료시키자(off)
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
  
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  color: #35495e;
  text-decoration: underline;
}
/* 라우터 트랜지션 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
