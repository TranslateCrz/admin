import { defineStore } from 'pinia'
import { AccountClient } from '@/application/clients/accountClient'

const localStorageId = 'login_auth_token'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    token: null,
    account: null,
  }),
  actions: {
    login(token) {
      this.token = token
    },
    connect(account) {
      console.log('set account')
      this.account = account
    },
  },
})

export const loginPlugin = async ({ store }) => {
  store.$onAction(({ name, after }) => {
    after(() => {
      if ('login' === name) {
        localStorage.setItem(localStorageId, store.token)
        AccountClient.getProfile().then((data) => {
          store.connect(data)
        })
      }
    })
  })

  const token = localStorage.getItem(localStorageId)
  if (token) {
    console.log('set token')
    store.login(token)
  }
}
