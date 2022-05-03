<script setup>
import { ref } from 'vue'
import { Register } from '@/domain/account'
import { accountService } from '@/application/services/accountService'
import CardForm from '@/components/CardForm.vue'

const account = ref(new Register())
function onSubmit() {
  accountService.register(account.value)
}
const accountUpdate = (a) => {
  account.value.populate(a)
}
</script>

<template>
  <CardForm
    name="Register"
    :onSubmit="onSubmit"
    :account="account"
    @update:account="accountUpdate"
  />
</template>
