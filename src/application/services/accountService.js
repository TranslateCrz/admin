import { accountClient } from '@/application/clients/accountClient'
import { useLoginStore } from '@/stores/login'
import router from '@/router'

let store = null
const getStore = () => {
  if (store === null) {
    store = useLoginStore()
  }
  return store
}

export const accountService = {
  login: (account) => {
    accountClient.login(account).then((data) => {
      getStore().login(data.token)
      router.go('account')
    })
  },
  register: (account) => {
    accountClient.register(account).then((data) => {
      accountService.login(data.email)
    })
  },
  logout: () => {
    getStore().logout()
    router.go('home')
  },
  checkLogin: () => {
    if (getStore().token === null) {
      this.logout()
    }
  },
  editProfile: (account) => {
    accountClient.putProfile(account).then((data) => {
      getStore().connect(data)
    })
  },
}
