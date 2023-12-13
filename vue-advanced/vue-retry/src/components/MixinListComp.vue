<template>
  <div>
     <ul>
      <li v-for="(item, index) in mixinListItem" :key="index">
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
    mixinListItem() {
      return this.$store.state.mixinList;
    }
  }
}

</script>

<style scoped>
</style>