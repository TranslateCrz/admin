import { Client } from '@/application/clients/client'

export const AccountClient = {
  register: function (data) {
    return Client.post('/register', data)
  },
  login: function (data) {
    return Client.post('/login', data)
  },
  getProfile: function () {
    return Client.get('/profile')
  },
}
