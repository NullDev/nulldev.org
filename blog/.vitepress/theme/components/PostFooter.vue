<script setup lang='js'>
import { watchEffect } from "vue";
import { useData, withBase } from "vitepress";
import blogStore from "../store.js";
import { data as posts } from "../posts.data.js";

const tagsURL = withBase("/tags#tagName");
const { frontmatter } = useData();

let postIndex;
let prevIndex;
let prevUrl;
let prevTitle;
let nextIndex;
let nextUrl;
let nextTitle;

watchEffect(() => {
    postIndex = posts.findIndex(post => post.title === frontmatter.value.title);
    prevIndex = postIndex > 0 ? postIndex - 1 : -1;
    prevUrl = prevIndex < 0 ? "" : withBase(posts[prevIndex].url);
    prevTitle = prevIndex < 0 ? "" : posts[prevIndex].title;
    nextIndex = postIndex < (posts.length - 1) ? postIndex + 1 : -1;
    nextUrl = nextIndex < 0 ? "" : withBase(posts[nextIndex].url);
    nextTitle = nextIndex < 0 ? "" : posts[nextIndex].title;
});

function selectTag(tag){
    blogStore.selectedTag = tag;
}
</script>

<template>
  <div class='flex flex-wrap justify-center'>
    <a v-for='tag in frontmatter.tags' v-bind:key="tag" :href='tagsURL' @click='selectTag(tag)'
      class='justify-self-center text-gray-500 dark:text-gray-300 my-1'>
      <span class='theme-badge'>{{ tag }}</span>
    </a>
  </div>
  <div class='mt-5 md:flex'>
    <div class='text-center my-3 md:my-0 md:w-1/2' aria-label='previous post'>
      <a class='theme-prev' v-show='prevUrl' :href='prevUrl'>
        Prev : {{ prevTitle }}
      </a>
    </div>
    <div class='text-center my-3 md:my-0 md:w-1/2' aria-label='next post'>
      <a class='theme-next' v-show='nextUrl' :href='nextUrl'>
        Next : {{ nextTitle }}
      </a>
    </div>
  </div>
</template>
