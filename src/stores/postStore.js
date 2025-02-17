import { postData } from '@/api/post'
import { searchPost } from '@/api/searchPost'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const response = await postData()
        this.posts = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async searchPosts(keyword) {
      if (!keyword.trim()) {
        await this.fetchData()
        return
      }
      this.loading = true
      this.error = null
      try {
        const response = await searchPost(keyword)
        this.posts = response.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
