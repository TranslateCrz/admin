<script setup>
import langs from 'langs'

defineProps(['countries'])
const emit = defineEmits(['update:countries'])
const update = (e) => {
  emit('update:countries', Array.from(e.target.options).filter((o) => o.selected).map((o) => o.value))
}
</script>

<template>
  <div class="field">
    <label class="label">Languages</label>
    <div class="select is-multiple">
      <select
        multiple
        size="5"
        @input="update"
      >
        <option
          :value="l"
          :selected="countries.includes(l)"
          v-for="l in langs.codes('1')"
          :key="l"
        >
          {{ new Intl.DisplayNames(['en'], { type: 'region' }).of(l) }}
        </option>
      </select>
    </div>
  </div>
</template>
