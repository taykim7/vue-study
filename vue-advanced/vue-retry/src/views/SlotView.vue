<template>
  <div>Slot
    <SlotComponent>
      <!-- slotTest라는 slot을 정의 -->
      <template slot="slotTest">
        <div>상위 컴포넌트 slot에서 정의했음</div>
      </template>
      <!-- slotRouterTest라는 slot을 정의 -->
      <router-link slot="slotRouterTest" :to="`/`">
        홈으로 가라
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