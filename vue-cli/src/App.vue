<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <!-- 
      컴포넌트 명명법 (네이밍 커뮤니케이션) 세 가지
      (1) <hello-world></hello-world> ← 스타일가이드에서 선호
      (2) <HelloWorld></HelloWorld>
      (2) <HelloWorld/> ← 여기선 이걸 사용 중
     -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld
    // 'hello-world' : HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
