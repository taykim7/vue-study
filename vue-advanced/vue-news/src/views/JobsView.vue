<template>
   <div>
     <!-- <ul class="news-list">
      <li v-for="(item) in this.$store.state.jobs" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
    <list-item></list-item>
   </div>
</template>

<script>
//import ListItem from '../components/ListItem.vue'
//import bus from '../utils/bus';

export default {
  components: {
    //ListItem
  },
  created() {
    // 패치를 하는 동안 로딩 띄우기
    // this.$store.dispatch('FETCH_JOBS')
    //   .then(() => {
    //     bus.$$emit('end:spinner');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

}
</script>