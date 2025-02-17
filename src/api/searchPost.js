import api from './api'

export const searchPost = (keyword) => {
  return api.get('/posts/search', { params: { keyword } })
}
