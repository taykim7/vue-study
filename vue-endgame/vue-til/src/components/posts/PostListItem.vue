<template>
  <li >
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if(confirm('진짜 삭제하실?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      // 수정 페이지로 이동
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style>

</style>