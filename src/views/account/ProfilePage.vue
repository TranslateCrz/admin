<script setup>
import { ref, watchEffect } from 'vue'
import AccountView from '@/views/AccountView.vue'
import { useLoginStore } from '@/stores/login'
import { Profile } from '@/domain/account'
import { accountService } from '@/application/services/accountService'
import CardForm from '@/components/CardForm.vue'

accountService.checkLogin()
const store = useLoginStore()
const profile = ref(new Profile())
function onSubmit() {
  accountService.editProfile(profile)
}
const accountUpdate = (a) => {
  profile.value.populate(a)
}
watchEffect(() => {
  accountUpdate(store.account)
})
</script>

<template>
  <AccountView>
    <main>
      <CardForm
        name="Edit profile"
        :onSubmit="onSubmit"
        :account="profile"
        @update:account="accountUpdate"
      />
    </main>
  </AccountView>
</template>
