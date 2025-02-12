import { postData } from '@/api/post'
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
  },
})

// [
//   {
//     id: 2,
//     title: 'hello world',
//     content: 'hello world! i like js ',
//     createdAt: '2025-02-11T13:04:23.309Z',
//     tags: [],
//     author: {
//       id: 1,
//       login: 'vitalik',
//       avatarUrl: null,
//       createdAt: '2025-02-11T13:04:23.221Z',
//     },
//   },
//   {
//     id: 2,
//     title: 'hello world',
//     content: 'hello world! i like js ',
//     createdAt: '2025-02-11T13:04:23.309Z',
//     tags: [],
//     author: {
//       id: 1,
//       login: 'vitalik',
//       avatarUrl: null,
//       createdAt: '2025-02-11T13:04:23.221Z',
//     },
//   },
//   {
//     id: 2,
//     title: 'hello world',
//     content: 'hello world! i like js ',
//     createdAt: '2025-02-11T13:04:23.309Z',
//     tags: [],
//     author: {
//       id: 1,
//       login: 'vitalik',
//       avatarUrl: null,
//       createdAt: '2025-02-11T13:04:23.221Z',
//     },
//   },
// ],
