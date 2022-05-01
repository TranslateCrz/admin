import { Client } from '@/application/clients/client'

export const TranslationClient = {
  get: function () {
    return Client.post('/translations')
  },
}
