<template>
  <div>
    Mixin 2
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