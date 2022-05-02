<script setup>
import { ref } from 'vue'
import { Login } from '@/domain/account'
import { accountService } from '@/application/services/accountService'
import CardForm from '@/components/CardForm.vue'

const account = ref(new Login())
function onSubmit() {
  accountService.login(account.value)
}
const accountUpdate = (a) => {
  account.value.populate(a)
}
</script>

<template>
  <CardForm
    name="Login"
    :onSubmit="onSubmit"
    :account="account"
    @update:account="accountUpdate"
  />
</template>
