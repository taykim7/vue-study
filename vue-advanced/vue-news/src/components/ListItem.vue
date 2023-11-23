<template>
  <div>
     <ul class="news-list">
      <li v-for="(item) in listItem" class="post">
        <!-- point -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <!-- title -->
          <p class="news-title">
            <!-- 분기처리 1 -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <!-- 분기처리 2 -->
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link
            v-if="item.user" 
            v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
   </div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch('FETCH_NEWS')
    // if (this.$route.path === '/news') {
      //   this.$store.dispatch('FETCH_NEWS');
    // } else if (this.$route.path === '/ask') {
      //   this.$store.dispatch('FETCH_ASK');
    // } else if (this.$route.path === '/jobs') {
      //   this.$store.dispatch('FETCH_JOBS');
    // } 
  },
  computed: {
    listItem() {
      // if (this.$route.name === 'news') {
      //   return this.$store.state.news;
      // } else if (this.$route.name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (this.$route.name === 'jobs') {
      //   return this.$store.state.jobs;
      // } else return ''
      return this.$store.state.list;
    }
  }
}

</script>

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .news-title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
</style>