<template>
  <!-- template의 하위 루트는 무조건 하나 -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function() {
    return {
      str: '프롭으로 전달한 것'
    }
  },
  components: {
    'app-header' : AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = '새로갱신!'
    }
  }
}
</script>

<style>

</style>