<template>
    <div>Second
    <div v-for="(item, index) in this.$store.state.list" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // ▼ dispatch를 통해 코드 제어 넘기기
    this.$store.dispatch('FETCH_SECOND')
  }

}
</script>

<style>

</style>