<script setup>
import AccountView from '@/views/AccountView.vue'
import { accountService } from '@/application/services/accountService'

accountService.checkLogin()
</script>

<template>
  <AccountView>
    <main>
      <p>Account connected</p>
    </main>
  </AccountView>
</template>
