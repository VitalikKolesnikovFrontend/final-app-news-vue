import api from './api'

export const postData = async () => {
  return await api.get('/posts')
}
