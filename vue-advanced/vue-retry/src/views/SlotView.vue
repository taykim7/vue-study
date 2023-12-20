<template>
  <div>Slot
    <SlotComponent>
      <!-- slotTest라는 slot을 정의 -->
      <template slot="slotTest">
        <div>텍스트</div>
      </template>
      <!-- slotRouterTest라는 slot을 정의 -->
      <router-link slot="slotRouterTest" :to="`/.`">
        링크
      </router-link>
    </SlotComponent>
  </div>
</template>
<script>
import SlotComponent from '../components/SlotComponent.vue'
export default {
  components: {
    SlotComponent,
  }
}
</script>
<style></style>