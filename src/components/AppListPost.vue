<script setup>
import { onMounted } from 'vue'
import AppCardPost from './AppCardPost.vue'
import { usePostStore } from '@/stores/postStore'
import { storeToRefs } from 'pinia'

const myStore = usePostStore()
const { posts } = storeToRefs(myStore)
const { fetchData } = myStore

onMounted(async () => {
  await fetchData()
})
</script>
<template>
  <div class="main">
    <ul v-for="item in posts" :key="item.id">
      <AppCardPost
        :title="item.title"
        :content="item.content"
        :author="item.author.login"
        :createdAt="item.createdAt"
        :tags="item.tags[0]"
      />
    </ul>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
