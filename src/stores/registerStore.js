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
        localStorage.setItem('user', JSON.stringify(response.data.user))
      } catch (error) {
        this.error = error
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    initializeAuth() {
      const storedToken = localStorage.getItem('token')
      const storedUser = localStorage.getItem('user')
      if (storedToken && storedUser) {
        this.token = storedToken
        this.user = JSON.parse(storedUser)
      }
    },
  },
  persist: localStorage,
})
