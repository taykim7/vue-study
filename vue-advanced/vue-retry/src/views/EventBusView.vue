<template>
  <div>이벤트버스를 탑시다.
    <button @click="turnOn">로딩 켜</button>
    <button @click="turnOff">로딩 꺼</button>
  </div>
</template>
<script>
import bus from '../utils/bus'

export default {
  methods: {
    turnOn() {
      // bus로 emit을 통해 이벤트를 전송
      bus.$emit('start');
    },
    turnOff() {
      bus.$emit('end');
    },
  }
}
</script>
<style></style>