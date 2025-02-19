import { defineStore } from 'pinia'
import { authUser } from '@/api/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    error: null,
  }),
  actions: {
    async fetchData(data) {
      try {
        const response = await authUser(data)
        this.user = response.data.user
        this.token = response.data.token

        localStorage.setItem('token', response.data.token)
      } catch (error) {
        this.error = error
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },
})
