<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
      <span v-if="isUserLogin">by {{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 로그인 분기1 -->
      <template v-if='isUserLogin'>
        <a href="javascript:;" @click="logoutUser">로그아웃</a>
      </template>
      <!-- 로그인 분기2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin
    },
    // 로그인 여부에 따라 로고 링크 분기처리
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUserName');
      // 토큰 제거
      this.$store.commit('clearToken');
      // 쿠키 제거 (인증값, 이름)
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>