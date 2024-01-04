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
        </div>
        <button class="btn" type="submit">생성</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
    }
  },
  methods: {
    submitForm() {
      alert('등록요청')
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