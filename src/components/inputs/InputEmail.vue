<script setup>
defineProps(['email'])
defineEmits(['update:email'])
</script>

<template>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input
        class="input"
        type="email"
        placeholder="Email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </div>
  </div>
</template>
