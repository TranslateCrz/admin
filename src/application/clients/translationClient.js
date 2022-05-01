import { client } from '@/application/clients/client'

export const translationClient = {
  get: function () {
    return client.post('/translations')
  },
}
