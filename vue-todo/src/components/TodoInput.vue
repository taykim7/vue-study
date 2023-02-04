<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <!-- app -->
    <div id="app">
      <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header" @click="showModal = false">
          엥
          <i class="closeModalBtn fas fa-times" ></i>
        </h3>
        <div slot="body">아무것도 안할거야?</div>
        
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        
        // input의 텍스트를 비움
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal: Modal
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
.closeModalBtn {
  color: #42b983;
}
</style>