<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [] as NewsItem[],
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
});
</script>

<style></style>
