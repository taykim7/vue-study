<template>
  <div>
    <ul>
      <li v-for="item, index in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      // 필수값 정의
      required: true,
    },
  },
}
</script>