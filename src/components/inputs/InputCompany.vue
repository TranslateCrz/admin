<script setup>
defineProps(['company'])
defineEmits(['update:company'])
</script>

<template>
  <div class="field">
    <label class="label">Company</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Company name"
        :value="company"
        @input="$emit('update:company', $event.target.value)"
      />
    </div>
  </div>
</template>
