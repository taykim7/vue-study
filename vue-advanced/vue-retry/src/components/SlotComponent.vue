<template>
  <div>슬롯컴포넌트
    <slot name="slotTest">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
    <slot name="slotRouterTest">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
    </slot>
    <slot name="slotEmptyTest">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
      정의되지않음
    </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>