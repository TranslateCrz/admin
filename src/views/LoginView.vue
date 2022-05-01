<script setup>
import { ref } from 'vue'
import { Login } from '@/domain/account'
import { accountService } from '@/application/services/accountService'

const account = ref(new Login())
function onSubmit() {
  accountService.login(account.value)
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
