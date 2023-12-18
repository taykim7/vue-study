<template>
  <div>
    <app-header :name="userName"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>


<script>
import AppHeader from '../components/AppHeader.vue';
import AppContent from '../components/AppContent.vue';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      userName: '포켓몬',
      items: ['피카츄', '꼬부기', '파이리'],
    }
  },
  methods: {
    renewItems() {
      this.items = ['라이츄', '어니부기', '리자돈'];
    },
  },
}
</script>

<style>

</style>