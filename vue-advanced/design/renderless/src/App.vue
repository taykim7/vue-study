<template>
  <div>
    <!-- open api -->
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- slot-scope -->
      <div slot-scope="{ response, loading}">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-else>
         로딩중
        </div>
      </div>
      
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    // ↓ 여기 데이터를 가져옴
    FetchData
  },
  // 대부분 그냥 여기서 created로 가져옴
}
</script>