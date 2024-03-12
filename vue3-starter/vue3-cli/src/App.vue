<template>
  <AppHeader
    :appTitle="message" @tryChange="changeMessage"></AppHeader>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      message: '메세지입니다.'
    }
  },
  methods: {
    changeMessage() {
      this.message = '넹'
    }
  }
}
</script>

<style scoped>

</style>