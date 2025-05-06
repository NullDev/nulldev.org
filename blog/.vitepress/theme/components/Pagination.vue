<script setup lang='js'>
import { onMounted } from "vue";
import { withBase } from "vitepress";
import { data as posts } from "../posts.data.js";
import blogStore from "../store.js";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/20/solid";

const pageBarLen = 5;
const postsPerPage = 5;
const postsLength = posts.length;
const totalPages = postsLength % postsPerPage === 0
    ? postsLength / postsPerPage
    : Math.ceil(postsLength / postsPerPage);
const totalBarLen = Math.ceil(totalPages / pageBarLen);

onMounted(() => {
    history.pushState({ page: blogStore.currentPage }, "goPage()", withBase("/"));
    window.addEventListener("popstate", e => {
        if (e?.state?.page) blogStore.currentPage = e.state.page;
    });
});

function genPages(){
    let start; let end;

    if (postsLength <= pageBarLen){
        start = 0;
        end = postsLength - 1;
    }
    else {
        start = (blogStore.pageBarIdx - 1) * pageBarLen;
        end = (start + pageBarLen) < totalPages
            ? start + pageBarLen
            : totalPages;
    }

    const pages = [];
    for (let i = start; i < end; i++){
        pages.push(i);
    }

    return pages;
}

function goPage(page){
    blogStore.currentPage = page + 1;
    history.pushState({ page: page + 1 }, "goPage()", withBase("/"));
}

function showPages(action){
    switch (action){
        case "next":
            if (blogStore.pageBarIdx < totalBarLen){
                blogStore.pageBarIdx += 1;
            }
            break;
        case "prev":
            if (blogStore.pageBarIdx > 1){
                blogStore.pageBarIdx -= 1;
            }
            break;
        default:
            break;
    }
}
</script>

<template>
  <nav class='flex justify-center pt-6' v-show='totalPages > 1' aria-label='page navigation'>
    <ul class='flex'>
      <li>
        <span class='theme-pagination rounded-l-lg' @click.prevent="showPages('prev')">
          <span class='sr-only'>Previous</span>
          <ChevronLeftIcon class='h-5 w-5' aria-hidden='true' />
        </span>
      </li>
      <li v-for='page in genPages()' v-bind:key="page">
        <span @click.prevent='goPage(page)'
          :class="blogStore.currentPage === (page + 1)
          ? 'theme-pagination-clicked theme-pagination' : 'theme-pagination'">
          {{ page + 1 }}
        </span>
      </li>
      <li>
        <span class='theme-pagination rounded-r-lg' @click.prevent="showPages('next')">
          <span class='sr-only'>Next</span>
          <ChevronRightIcon class='h-5 w-5' aria-hidden='true' />
        </span>
      </li>
    </ul>
  </nav>
</template>
