import { ref } from "vue";

function useMessage() {
  // data의 역할
  const message = ref('안녕');

  // methods의 역할 (함수 선언문)
  function changeMessage() {
    message.value = 'Hi';
  }

  return {
    message,
    changeMessage
  }
}

export { useMessage }