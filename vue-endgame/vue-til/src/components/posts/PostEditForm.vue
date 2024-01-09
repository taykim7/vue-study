<template>
  <div class="contents">
    <h1 class="page-header">게시글 수정</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title">
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents"/>
          <p v-if="!isContentsValid" class="validation-text warning">Text is Toooooo long ({{ this.contents.length }})</p>
        </div>
        <button class="btn" type="submit">수정</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 100;
    }
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents
      });
      this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    }
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>