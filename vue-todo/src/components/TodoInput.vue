<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        // ○ 저장하는 로직 (localStorage.setItem)
        //localStorage.setItem(this.newTodoItem, this.newTodoItem);
        
        // 이제는 완료 여부도 추가해야함
        //var obj = {completed: false, item: this.newTodoItem};
        
        // 자바스크립트 객체를 string 으로 직렬화
        //localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        
        //this.$emit('이벤트이름', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem);
        
        // input의 텍스트를 비움
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }

}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 80%;
  height: 80%;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>