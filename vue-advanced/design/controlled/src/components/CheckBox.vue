<template>
  <input type="checkbox" :value="appValue" @click="toggleCheckBox">
</template>

<script>
export default {
  // v-model이 :value로 내려옴
  props: ['appValue'],
  methods: {
    toggleCheckBox() {
      // 하위에서 상위로 올리기
      this.$emit('input', !this.value);
    }
  }
}
</script>