<script setup>
import { ref } from 'vue'
import { Register } from '@/domain/account'
import { AccountClient } from '@/application/clients/accountClient'

const account = ref(new Register())
function onSubmit() {
  console.log(account)
  console.log(AccountClient.register(account))
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Register form</p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="card-content">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email" v-model="account.email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Languages</label>
          <div class="select is-multiple">
            <select multiple size="3" v-model="account.countries">
              <option value="fr">French</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Company</label>
          <div class="control">
            <input class="input" type="text" placeholder="Company name" v-model="account.company" />
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="card-footer-item button is-light">
          Register
        </button>
      </div>
    </form>
  </div>
</template>
