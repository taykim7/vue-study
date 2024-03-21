<template>
  <h1>{{ appTitle }}</h1>
  <h4>{{ newTitle }}</h4>
</template>


<script>
import { computed } from 'vue';

  export default {
  props: ['appTitle'],
  setup(props) {
    // computed 활용
    const newTitle = computed(() => {
      return props.appTitle + ' APP';
    })

    return {
      newTitle
    }
  }
}
</script>

<style lang="scss" scoped>

</style>