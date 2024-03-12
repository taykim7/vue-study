<template>
  <div>
    <p>{{ appTitle }}</p>
    <button @click="changeTitle">버튼</button>
  </div>
</template>

<script>
export default {
  props: ['appTitle'],
  methods: {
    changeTitle() {
      this.$emit('tryChange');
    }
  }
}
</script>

<style scoped>

</style>