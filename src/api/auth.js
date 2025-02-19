import { useModalStore } from '@/stores/modalStore'
import api from './api'

export const authUser = async (formData) => {
  const modalStore = useModalStore()
  if (modalStore.mode === 'register') {
    return await api.post('/auth/register', formData)
  } else {
    return await api.post('/auth/login', formData)
  }
}
