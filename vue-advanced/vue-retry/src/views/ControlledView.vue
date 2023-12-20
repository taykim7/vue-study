<template>
  <div>
  <!-- props로 전달하지 않고 v-model 활용 -->
  <!-- 하위에서 관리해야 했던 데이터를 상위에서 관리하게 하는 방법 -->
  <!-- 컴포넌트에 데이터 의존성 분리 -->
  <div>
    v-model 사용
    <check-box v-model="checked"></check-box>
    checked는 {{ checked }}
  </div>
  <div>
    props 사용
    <check-box-2 :checked2="checked2" @renew="renewItems"></check-box-2>
    checked2는 {{ checked2 }}
  </div>
  </div>
</template>

<script>
import CheckBox from '../components/CheckBox.vue';
import CheckBox2 from '../components/CheckBox2.vue';
export default {
  components: {
    CheckBox,
    CheckBox2
  },
  data() {
    return {
      checked: false,
      checked2: false,
    }
  },
  methods: {
    renewItems() {
      this.checked2 = !this.checked2
    }
  }
}
</script>