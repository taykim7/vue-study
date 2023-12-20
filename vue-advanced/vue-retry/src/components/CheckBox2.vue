<template>
    <input type="checkbox" @click="toggleCheckBox">
</template>

<script>
export default {
  // v-model이 :value로 내려옴
  props: {
    checked2: Boolean
  },
  methods: {
    toggleCheckBox() {
      // 하위에서 상위로 이벤트 발생
      this.$emit('renew');
    }
  }
}
</script>