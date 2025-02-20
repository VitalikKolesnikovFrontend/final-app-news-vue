import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    mode: null,
  }),
  actions: {
    openModal(mode) {
      this.isOpen = true
      this.mode = mode
    },
    closeModal() {
      this.isOpen = false
    },
  },
})
