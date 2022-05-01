import { useLoginStore } from '@/stores/login'

let store = null
const getStore = () => useLoginStore()

export const Client = {
  auth: () => {
    if (store === null) {
      store = getStore()
    }
    return store.token
  },
  fetch: function (url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
      const init = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      if (data) {
        init.body = JSON.stringify(data)
      }
      const auth = this.auth()
      if (auth) {
        init.headers.Authorization = auth
      }
      fetch(import.meta.env.VITE_BACK_API_URL + url, init)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          reject({
            status: response.status,
            error: response.body,
          })
        })
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject({
            status: 500,
            error: error,
          })
        })
    })
  },
  get: function (url) {
    return this.fetch(url)
  },
  post: function (url, data) {
    return this.fetch(url, 'POST', data)
  },
  put: function (url, data) {
    return this.fetch(url, 'PUT', data)
  },
  delete: function (url) {
    return this.fetch(url, 'DELETE')
  },
}
