<script setup>
import { usePostStore } from '@/stores/postStore'
import { ref, watch } from 'vue'
const posts = usePostStore()
const keyword = ref('')
watch(keyword, () => {
  posts.searchPosts(keyword.value)
})
</script>
<template>
  <div class="search">
    <el-input v-model="keyword" style="width: 240px; height: 30px" placeholder="Search..." />
  </div>
</template>
<style scoped></style>
