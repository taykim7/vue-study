<template>
  <div>
    Mixin 1
    <mixin-list-comp></mixin-list-comp>
  </div>
</template>

<script>
import MixinListComp from '../components/MixinListComp.vue'
import ListMixin from '../mixins/ListMixin'

export default {
  components: { MixinListComp },
  mixins: [ ListMixin ],
}
</script>

<style>

</style>