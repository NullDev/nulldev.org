<script setup lang='ts'>
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div class='page-title'>
    <span>{{ props.text }}</span>
  </div>
</template>
