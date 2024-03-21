<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @add="addTodo"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodo"></TodoList>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: { TodoHeader, TodoInput, TodoList },

  setup() {
    const todoItems = ref([]);

    const fetchTodos = () => {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      return result;
    }

    // 라이프 사이클 API
    // 명시적으로 라이프 사이클 API 적용 (컴포넌트가 DOM에 부착되기 전)
    onBeforeMount(() => {
      todoItems.value = fetchTodos();
    })

    function addTodo(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    return {
      todoItems, addTodo
    }
  },
  // 모두 setup에 작성할 필요는 없다!
  methods: {
    removeTodo(item, index) {
      // setup 내부 데이터는 data()에 접근한 것 처럼 this를 활용
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  },
  data() {
    return {
      title: '할 일'
    }
  }
}
</script>