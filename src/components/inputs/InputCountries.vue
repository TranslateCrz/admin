<script setup>
defineProps(['countries'])
defineEmits(['update:countries'])
</script>

<template>
  <div class="field">
    <label class="label">Languages</label>
    <div class="select is-multiple">
      <select
        multiple
        size="3"
        :value="countries"
        @input="$emit('update:countries', $event.target.value)"
      >
        <option value="fr">French</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  </div>
</template>
