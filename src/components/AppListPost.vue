<script setup>
import { ref } from 'vue'
import AppCardPost from './AppCardPost.vue'

const posts = ref([
  {
    id: 2,
    title: 'hello world',
    content: 'hello world! i like js ',
    createdAt: '2025-02-11T13:04:23.309Z',
    tags: [],
    author: {
      id: 1,
      login: 'vitalik',
      avatarUrl: null,
      createdAt: '2025-02-11T13:04:23.221Z',
    },
  },
  {
    id: 2,
    title: 'hello world',
    content: 'hello world! i like js ',
    createdAt: '2025-02-11T13:04:23.309Z',
    tags: [],
    author: {
      id: 1,
      login: 'vitalik',
      avatarUrl: null,
      createdAt: '2025-02-11T13:04:23.221Z',
    },
  },
  {
    id: 2,
    title: 'hello world',
    content: 'hello world! i like js ',
    createdAt: '2025-02-11T13:04:23.309Z',
    tags: [],
    author: {
      id: 1,
      login: 'vitalik',
      avatarUrl: null,
      createdAt: '2025-02-11T13:04:23.221Z',
    },
  },
])
</script>
<template>
  <div class="main">
    <ul v-for="item in posts" :key="item.id">
      <AppCardPost
        :title="item.title"
        :content="item.content"
        :author="item.author.login"
        :createdAt="item.createdAt"
        :tags="item.tags[i]"
      />
    </ul>
  </div>
</template>
<style scoped>
.main {
  display: flex;
}
</style>
