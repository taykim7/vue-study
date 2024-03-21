import { ref } from "vue";

function useTodo() {
  // 할일
  const todoItems = ref([]);
  // 할일 가져오기
  const fetchTodos = () => {
    const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
    return result;
  }
  // 할일 추가
  function addTodo(todo) {
    todoItems.value.push(todo);
    localStorage.setItem(todo, todo);
  }

  return {
    todoItems,
    fetchTodos,
    addTodo
  }
}

export { useTodo }