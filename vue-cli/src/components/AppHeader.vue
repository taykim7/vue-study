<template>
  <header>
    <h1>안녕하세요 헤더를 데려왔어요</h1>
    {{ propsdata }}
    <button v-on:click="sendEvent">보내라</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>