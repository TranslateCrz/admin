<script setup>
import { ref } from 'vue'
import { Login } from '@/domain/account'
import { AccountClient } from '@/application/clients/accountClient'
import { useLoginStore } from '@/stores/login'
import router from '@/router'

const store = useLoginStore()
if (store.token) {
  // router.go('account')
}
const account = ref(new Login())
function onSubmit() {
  AccountClient.login(account.value).then((data) => {
    store.login(data.token)
    router.go('account')
  })
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Login</p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="card-content">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email" v-model="account.email" />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="card-footer-item button is-light">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
