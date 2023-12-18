<template>
  <input type="checkbox" :value="checked2" @click="toggleCheckBox">
</template>

<script>
export default {
  // v-model이 :value로 내려옴
  props: {
    checked2: Boolean
  },
  methods: {
    toggleCheckBox() {
      // 하위에서 상위로 올리기
      console.log('renew 로 보냅니다 '+ !this.checked2)
      this.$emit('renew', !this.checked2);
    }
  }
}
</script>