<template>
  <div class="contents">
    <h1 class="page-header">게시글 작성</h1>
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
        <button class="btn" type="submit">생성</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 100;
    }
  },
  methods: {
    async submitForm() {
      try {
          const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        // 메인 페이지로 이동
        this.$router.push('/main');
      } catch (error) {
        this.logMessage= error.response.data.message;
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