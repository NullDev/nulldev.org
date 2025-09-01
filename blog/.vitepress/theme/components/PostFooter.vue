<script setup lang="ts">
import { watchEffect } from "vue";
import { useData, withBase } from "vitepress";
import blogStore from "../store";
import { data as posts } from "../posts.data";

const tagsURL = withBase("/tags#tagName");
const { frontmatter } = useData();
let postIndex: number,
  prevIndex: number,
  prevUrl: string,
  prevTitle: string,
  nextIndex: number,
  nextUrl: string,
  nextTitle: string;

watchEffect(() => {
  postIndex = posts.findIndex(post => post.title === frontmatter.value.title);
  prevIndex = postIndex > 0 ? postIndex - 1 : -1;
  prevUrl = prevIndex < 0 ? "" : withBase(posts[prevIndex].url);
  prevTitle = prevIndex < 0 ? "" : posts[prevIndex].title;
  nextIndex = postIndex < (posts.length - 1) ? postIndex + 1 : -1;
  nextUrl = nextIndex < 0 ? "" : withBase(posts[nextIndex].url);
  nextTitle = nextIndex < 0 ? "" : posts[nextIndex].title;
})

function selectTag(tag: string) {
  blogStore.selectedTag = tag;
}
</script>

<template>
  <div class="post-footer">
    <div class="post-tags">
      <a v-for="tag in frontmatter.tags" 
        :href="tagsURL" 
        @click="selectTag(tag)"
        class="tag-link">
        <span class="theme-badge">{{ tag }}</span>
      </a>
    </div>
    <div class="post-navigation">
      <div class="nav-prev" aria-label="previous post">
        <a class="nav-link" v-show="prevUrl" :href="prevUrl">
          ← Prev: {{ prevTitle }}
        </a>
      </div>
      <div class="nav-next" aria-label="next post">
        <a class="nav-link" v-show="nextUrl" :href="nextUrl">
          Next: {{ nextTitle }} →
        </a>
      </div>
    </div>
  </div>
</template>
