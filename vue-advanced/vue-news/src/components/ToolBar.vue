<template>
  <div class="header">
    <router-link to="/news">NEWS</router-link> |
    <router-link to="/ask">ASK</router-link> |
    <router-link to="/jobs">JOBS</router-link>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: red;
}
.header a {
  color: white;
}
</style>