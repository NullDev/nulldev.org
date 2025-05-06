<script setup lang='js'>
const props = defineProps({
    date: String,
    category: String,
});
</script>

<template>
  <dl class='pb-2'>
    <dt class='text-base leading-6 font-medium text-gray-500 dark:text-gray-300'>
        <span class='theme-date'>📆{{ props.date }}</span>
    </dt>
  </dl>
</template>
