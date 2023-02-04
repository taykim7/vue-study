<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">
          <i class="fas fa-check"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  /*
  data: function() {
    return {
      todoItems: []
    }
  },
  */
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem, index);
      this.$emit('removeItem', todoItem, index);

      // localStorage 에서 지우기
      //localStorage.removeItem(todoItem); // key와 값이 같아서 가능
      // 배열 메소드로 지우기
      //this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      // 로컬스토리지의 데이터를 갱신 (api가 없어서... 지우고 다시세팅(할일완료 true 로 표시후))
      // localStorage.removeItem(todoItem.item);
      // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      this.$emit('toggleItem', todoItem, index);
    }
  },
  /*
  created: function() {
    console.log('TodoList.vue의 created');
    
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length ; i++) {
        //console.log(localStorage.key(i))
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // 기존엔 값만 있었지만 .. 이제 완료 여부도 추가해야함
          //this.todoItems.push(localStorage.key(i));

          // (1) 저장된 아이템(string으로 만든)
          //localStorage.getItem(localStorage.key(i));

          // (2) string을 다시 객체로 만들어야함
          //JSON.parse(localStorage.getItem(localStorage.key(i)));

          // 이걸 넣어
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  }
  */

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #f58383;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}
</style>