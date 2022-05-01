<script setup>
import AccountView from '@/views/AccountView.vue'
import { useLoginStore } from '@/stores/login'
import { Profile } from '@/domain/account'
import { accountService } from '@/application/services/accountService'

const store = useLoginStore()
accountService.checkLogin()
function onSubmit() {
  const account = new Profile()
  account.populate(store.account.countries, store.account.company)
  accountService.editProfile(account)
}
</script>

<template>
  <AccountView>
    <main>
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">Profile form</p>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="card-content">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  disabled
                  :value="store.account.email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Languages</label>
              <div class="select is-multiple">
                <select multiple size="3" v-model="store.account.countries">
                  <option value="fr">French</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Company</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Company name"
                  v-model="store.account.company"
                />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="card-footer-item button is-light">
              Edit profile
            </button>
          </div>
        </form>
      </div>
    </main>
  </AccountView>
</template>
