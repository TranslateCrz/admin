import { client } from '@/application/clients/client'

export const accountClient = {
  register: function (data) {
    return client.post('/register', data)
  },
  login: function (data) {
    return client.post('/login', data)
  },
  getProfile: function () {
    return client.get('/profile')
  },
  putProfile: function (data) {
    return client.put('/profile', data)
  },
}
