<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { watch } from 'vue';
export default {
  props: ['todoItems'],
  setup(props, context) {
    function removeTodo(item, index) {
      context.emit('remove', item, index);
    }

    // todoItems가 변할때 마다 동작
    watch(props.todoItems, (newValue) => {
      console.log({ newValue });
      // 하지만 최대한 watch는 지양하자.. 추적이 어렵기 때문에!
      // 명시적인 코드를 활용하자
    })
    return { removeTodo }
  }
}
</script>