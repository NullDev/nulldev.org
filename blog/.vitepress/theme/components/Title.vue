<script setup lang='js'>
const props = defineProps({
    text: String,
});
</script>

<template>
  <div class='pb-6 text-4xl font-extrabold'>
    <span class='theme-title'>
      {{ props.text }}
    </span>
  </div>
</template>
