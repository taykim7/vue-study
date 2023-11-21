<template>
  <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <!-- (1) -->
        <!-- <div>{{ userInfo.id }}</div>
        <div class="time">
          {{ userInfo.created}}
        </div> -->
        <!-- (2) -->
        <div>{{ info.id }}</div>
        <div class="time">
          {{ info.created}}
        </div>
        <!-- <router-link :to="`/user/${userInfo.user}`">
          {{ userInfo.user }}
        </router-link> -->
      </div>
    </div>
</template>

<script>
export default {
  // (1) 여기서 직접 vuex에 접근하여 데이터를 받아와도 되고
  // state를 표현하는 데에만 활용
  //  computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   } 
  // },
  // (2) props로 가져올수도 있음
  // 컴포넌트간에 어떤 데이터의 연관성이 있는지 바로 확인이 가능
  props: {
    info: Object
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>