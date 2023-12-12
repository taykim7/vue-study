<template>
  <div>
    Hoc-list-view
    <hoc-list-comp></hoc-list-comp>
  </div>
</template>

<script>
import HocListComp from '../components/HocListComp.vue';
export default {
  // 데이터를 불러와서 뿌리기만 하면 됨
  components: {
    HocListComp
  },
}
</script>

<style>

</style>