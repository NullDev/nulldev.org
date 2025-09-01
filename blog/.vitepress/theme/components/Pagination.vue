<script setup lang='ts'>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../posts.data'
import themeConfig from '../config'
import blogStore from '../store'
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/20/solid'

const pageBarLen = 5
const postsPerPage = themeConfig.postsPerPage
const postsLength = posts.length
const totalPages = postsLength % postsPerPage === 0
  ? postsLength / postsPerPage
  : Math.ceil(postsLength / postsPerPage)
const totalBarLen = Math.ceil(totalPages / pageBarLen)

// 1st page
onMounted(() => {
  history.pushState({ page: blogStore.currentPage }, 'goPage()', withBase('/'))
  window.addEventListener('popstate', e => {
    if (e?.state?.page) blogStore.currentPage = e.state.page
  })
})

function genPages() {
  let start: number, end: number

  if (postsLength <= pageBarLen) {
    start = 0
    end = postsLength - 1
  } else {
    start = (blogStore.pageBarIdx - 1) * pageBarLen
    end = (start + pageBarLen) < totalPages
      ? start + pageBarLen
      : totalPages
  }

  let pages: (number)[] = []
  for (let i: number = start; i < end; i++) {
    pages.push(i)
  }

  return pages
}

function goPage(page: number) {
  blogStore.currentPage = page + 1
  history.pushState({ page: page + 1 }, 'goPage()', withBase('/'))
}

function showPages(action: string) {
  switch (action) {
    case 'next':
      if (blogStore.pageBarIdx < totalBarLen) {
        blogStore.pageBarIdx += 1
      }
      break
    case 'prev':
      if (blogStore.pageBarIdx > 1) {
        blogStore.pageBarIdx -= 1
      }
      break
    default:
      break
  }
}
</script>

<template>
  <nav class='pagination' v-show='totalPages > 1' aria-label='page navigation'>
    <a href='#' class='pagination-nav' @click.prevent="showPages('prev')">
      <span class='sr-only'>Previous</span>
      <ChevronLeftIcon class='pagination-icon' aria-hidden='true' />
    </a>
    <a v-for='page in genPages()' 
       href='#' 
       @click.prevent='goPage(page)' 
       :class="blogStore.currentPage === (page + 1) ? 'current' : ''">
      {{ page + 1 }}
    </a>
    <a href='#' class='pagination-nav' @click.prevent="showPages('next')">
      <span class='sr-only'>Next</span>
      <ChevronRightIcon class='pagination-icon' aria-hidden='true' />
    </a>
  </nav>
</template>