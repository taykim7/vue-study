<template>
  <div>
     <ul>
      <li v-for="(item, index) in hocListItem" :key="index">
        <div>
          <!-- 여기서 호출하는 데이터에 따라 분기를 다양하게 가능 -->
          <template>
            <div>
              {{ item.title }}
            </div>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    hocListItem() {
      return this.$store.state.hocList;
    }
  }
}

</script>

<style scoped>
</style>