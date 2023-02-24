<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 30px;
  line-height: 30px;
  background-color: rgb(255, 96, 96);
  border-radius: 15px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #ffffff;
  display: block;
}
</style>