import { useModalStore } from '@/stores/modalStore'
import api from './api'

export const authUser = async (formData) => {
  const modalStore = useModalStore()
  const endpoint = modalStore.mode === 'register' ? '/auth/register' : '/auth/login'
  return await api.post(endpoint, formData)
}
