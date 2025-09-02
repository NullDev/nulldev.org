<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useData } from "vitepress";
import themeConfig from "../config";

const comments = ref();
const { repo, repoId, category, categoryId } = themeConfig.giscus;

onMounted(() => {
  if (repo) {
    const giscus = document.createElement("script");
    giscus.async = true;
    giscus.setAttribute("src", "https://giscus.app/client.js");
    
    giscus.setAttribute("data-repo", repo);
    giscus.setAttribute("data-repo-id", repoId);
    giscus.setAttribute("data-category", category);
    giscus.setAttribute("data-category-id", categoryId);

    giscus.setAttribute("data-mapping", "url");
    giscus.setAttribute("data-strict", "0");
    giscus.setAttribute("data-reactions-enabled", "1");
    giscus.setAttribute("data-emit-metadata", "0");
    giscus.setAttribute("data-input-position", "bottom");
    giscus.setAttribute("data-theme", "dark");
    giscus.setAttribute("data-lang", "en");
    giscus.setAttribute("crossorigin", "anonymous");
    comments.value.appendChild(giscus);
  }
});
</script>

<template>
  <div ref="comments"></div>
</template>
