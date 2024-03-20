<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
export default {
  components: { TodoHeader, TodoInput },
}
</script>