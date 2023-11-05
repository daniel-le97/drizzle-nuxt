<script lang="ts" setup>
defineProps<{
  modelValue?: string
  label?: string
  required?: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-2 text-sm">
    <label v-if="label" class="block mb-1">
      {{ label }}
      <span v-if="required" class="text-xs text-red-500">*</span>
    </label>
    <input type="text" :value="modelValue" class="rounded-lg border-2 border-base-dark outline-primary-300 p-1 w-full"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)">
  </div>
</template>
