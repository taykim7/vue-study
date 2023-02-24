<template>
  <div id="root">
    <h1> ▼ vuex에서 가져온 값 ... 개노가다 방식 </h1>
    <p>{{ this.$store.getters.orginalPrice }}</p>
    <p>{{ this.$store.getters.doublelPrice }}</p>
    <h1> ▼ 뷰에서 권고하는 방식 </h1>
    <p>{{ this.orginalPrice }}</p>
    <p>{{ this.doublePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {

        // ▼ 이렇게 들고왔다간 하루종일 걸림
        // orginalPrice() {
        //     return this.$store.getters.orginalPrice
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice
        // }

        // ▼ 아주 쉬운 헬퍼 함수 ♡
        ...mapGetters(['orginalPrice', 'doublePrice'])
    }

}
</script>

<style>

</style>