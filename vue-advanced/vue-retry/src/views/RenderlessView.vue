<template>
  <div>
    <!-- open api -->
    <fetch-renderless url="https://jsonplaceholder.typicode.com/users/1">
       <!-- slot-scope -->
      <div slot-scope="{ response, loading}">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-else>
         로딩중
        </div>
      </div>
    </fetch-renderless>
  </div>
</template>

<script>
import FetchRenderless from '../components/FetchRenderless.vue'
export default {
  components: {
    FetchRenderless
  },
}
</script>