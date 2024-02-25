<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from "@/api";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [],
    };
  },

  methods: {
    async fetchNewsItmes() {
      const response = await fetchNews();
      this.newsItems = response.data;
    },
  },

  created() {
    this.fetchNewsItmes();
  },
};
</script>

<style></style>
