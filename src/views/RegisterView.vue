<script setup>
import { ref } from 'vue'
import { Register } from '@/domain/account'
import { accountService } from '@/application/services/accountService'
import { accountValidator } from '@/application/validator/accountValidator'
import CardForm from '@/components/CardForm.vue'

const account = ref(new Register())
const error = ref({})
function onSubmit() {
  error.value = accountValidator.validate(account.value)
  if (!error.value) {
    accountService.register(account.value)
  }
}
const accountUpdate = (a) => {
  account.value.populate(a)
}
</script>

<template>
  <CardForm
    name="Register"
    :onSubmit="onSubmit"
    :error="error"
    :account="account"
    @update:account="accountUpdate"
  />
</template>
