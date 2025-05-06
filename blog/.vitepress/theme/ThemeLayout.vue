<script setup lang="js">
import DefaultTheme from "vitepress/theme";
import Home from "./components/Home.vue";
import PostHeader from "./components/PostHeader.vue";
import PostFooter from "./components/PostFooter.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <Home />
    </template>
    <template #doc-before>
      <PostHeader />
    </template>
    <template #doc-after>
      <PostFooter />
    </template>
  </Layout>
</template>
