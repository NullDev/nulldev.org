<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useData } from "vitepress";
import themeConfig from "../config";

const { isDark } = useData();
const comments = ref();
const { repo, issueTerm, dark, label } = themeConfig.utterances;

onMounted(() => {
  if (repo) {
    const utterances = document.createElement("script");
    utterances.async = true;
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", repo);
    utterances.setAttribute("issue-term", issueTerm);
    utterances.setAttribute("theme", dark);
    utterances.setAttribute("label", label);
    utterances.setAttribute("crossorigin", "anonymous");
    comments.value.appendChild(utterances);
  }
});
</script>

<template>
  <div ref="comments"></div>
</template>
