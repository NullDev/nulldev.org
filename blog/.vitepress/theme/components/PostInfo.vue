<script setup lang='ts'>
import blogStore from '../store'
import themeConfig from '../config'

const root = themeConfig.base ? themeConfig.base.slice(0, -1) : '';
const props = defineProps<{
  date: string,
}>();
</script>

<template>
  <div class='post-info'>
    <span class='post-date'>📆 {{ date }}</span>
  </div>
</template>
