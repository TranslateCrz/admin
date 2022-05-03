<script setup>
import InputEmail from '@/components/inputs/InputEmail.vue'
import InputCountries from '@/components/inputs/InputCountries.vue'
import InputCompany from '@/components/inputs/InputCompany.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  onSubmit: {
    type: Function,
    required: true,
  },
  error: {
    type: Object,
    required: true,
  },
  account: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['update:account'])
const emailUpdate = (email) =>
  emit('update:account', { ...props.account, email })
const countriesUpdate = (countries) =>
  emit('update:account', { ...props.account, countries })
const companyUpdate = (company) =>
  emit('update:account', { ...props.account, company })
</script>

<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">{{ name }} form</p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="card-content">
        <InputEmail
          v-if="account.email !== undefined"
          :error="error.email"
          :email="account.email"
          @update:email="emailUpdate"
        />
        <InputCountries
          v-if="account.countries !== undefined"
          :error="error.countries"
          :countries="account.countries"
          @update:countries="countriesUpdate"
        />
        <InputCompany
          v-if="account.company !== undefined"
          :company="account.company"
          @update:company="companyUpdate"
        />
      </div>
      <div class="card-footer">
        <button type="submit" class="card-footer-item button is-light">
          {{ name }}
        </button>
      </div>
    </form>
  </div>
</template>
