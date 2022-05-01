<script setup>
import AccountView from '@/views/AccountView.vue'
import { useLoginStore } from '@/stores/login'
import router from '@/router'

const store = useLoginStore()
console.log('get token')
if (store.token === null) {
  router.go('home')
}
</script>

<template>
  <AccountView>
    <main>
      <p>Account connected with {{ store.account.email }}</p>
    </main>
  </AccountView>
</template>
