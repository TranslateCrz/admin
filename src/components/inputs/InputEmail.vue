<script setup>
defineProps(['email', 'error'])
defineEmits(['update:email'])
</script>

<template>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input
        class="input"
        :class="{ 'is-danger': error }"
        type="email"
        placeholder="Email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </div>
    <p v-if="error" class="help is-danger">{{ error }}</p>
  </div>
</template>
