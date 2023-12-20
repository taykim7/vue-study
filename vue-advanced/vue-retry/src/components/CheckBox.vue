<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // v-model이 :value로 내려옴
  props: ['value'],
  methods: {
    toggleCheckBox() {
      // 하위에서 상위로 올리기
      this.$emit('input', !this.value);
    }
  }
}
</script>