<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner-test :loading="loadingStatus"></spinner-test>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import bus from './utils/bus'
import SpinnerTest from './components/SpinnerTest.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
    SpinnerTest,
  },
  data() {
    return {
      loadingStatus: false,
    } 
  },
  created() {
    // 이벤트 등록
    // start 이벤트가 오면 → start 메서드
    bus.$on('start', this.start);
    // end 이벤트가 오면 → end 메서드
    bus.$on('end', this.end);
  },
  methods: {
    start() {
      this.loadingStatus = true;
    },
    end() {
      this.loadingStatus = false;
    },
  },
  beforeDestroy() {
    // **이벤트를 등록하면 계속 쌓이기 때문에 꼭 종료시키자(off)
    bus.$off('start', this.start)
    bus.$off('end', this.end)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
