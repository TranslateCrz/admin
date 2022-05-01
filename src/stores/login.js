import { defineStore } from 'pinia'
import { accountClient } from '@/application/clients/accountClient'

const localStorageId = 'login_auth_token'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    token: null,
    account: {},
  }),
  actions: {
    login(token) {
      this.token = token
    },
    connect(account) {
      this.account = account
    },
    logout() {
      this.token = null
      this.account = {}
    },
  },
})

export const loginPlugin = async ({ store }) => {
  store.$onAction(({ name, after }) => {
    after(() => {
      if ('login' === name) {
        localStorage.setItem(localStorageId, store.token)
        accountClient.getProfile().then((data) => {
          store.connect(data)
        })
      }
      if ('logout' === name) {
        localStorage.removeItem(localStorageId)
      }
    })
  })

  const token = localStorage.getItem(localStorageId)
  if (token) {
    store.login(token)
  }
}
