<script setup lang='ts'>
import { withBase } from 'vitepress'
import Pagination from './Pagination.vue'
import themeConfig from '../config'
import blogStore from '../store'
import { data as posts } from '../posts.data'

const postsPerPage = themeConfig.postsPerPage

function showPosts() {
  return posts.slice(
    (blogStore.currentPage - 1) * postsPerPage, 
    blogStore.currentPage * postsPerPage
  )
}
</script>

<template>
  <div class='theme-container'>
    <div class='VPDoc container'>
      <h1>Blog Posts</h1>
      <hr>
      <div class='post-list'>
        <article v-for='post of showPosts()' class='post-card'>
          <PostInfo :date='post.date.string' />
          <h2 class='post-title'>
            <a :href='withBase(post.url)'>
              {{post.title}} 
            </a>
          </h2>
          <div v-if='post.excerpt' class='excerpt'
            v-html='post.excerpt'></div>
          <div class='post-actions'>
            <a class='theme-readmore' aria-label='read more' :href='withBase(post.url)'>
              Read more
            </a>
          </div>
        </article>
      </div>
      <Pagination />
    </div>
  </div>
</template>
