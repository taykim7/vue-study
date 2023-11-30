<template>
  <div>
  <!-- props로 전달하지 않고 v-model 활용 -->
  <!-- <check-box :checked="checked"></check-box> -->
  <check-box v-model="checked"></check-box>
  checked는 {{ checked }}
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: true,
    }
  }
}
</script>