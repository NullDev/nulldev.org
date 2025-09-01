<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted, onBeforeUnmount } from "vue";
const { page, frontmatter } = useData();

let script: HTMLScriptElement;

onMounted(() => {
  const lastUpdated = new Date(page.value.lastUpdated).toISOString();
  const dataJsonLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontmatter.value.title,
    "datePublished": frontmatter.value.date,
    "dateModified": lastUpdated,
  };

  script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(dataJsonLD);
  document.head.appendChild(script);
});

onBeforeUnmount(() => {
  if (script && script.parentElement) script.parentElement.removeChild(script);
})
</script>

<template>
  <div class="post-header">
    <h1 class="post-title">
      {{ frontmatter.title }}
    </h1>
    <PostInfo class="post-meta" :date="frontmatter.date.slice(0, 10)" />
  </div>
</template>
