<script setup lang='ts'>
import { withBase } from 'vitepress';
import blogStore from '../store'
import { initTags } from '../utils'
import { data as posts } from '../posts.data'

const tags = initTags(posts)

function tagSwitcher(tag: string) {
  blogStore.selectedTag = tag
}
</script>

<template>
  <div class='theme-container'>
    <div class='VPDoc container'>
      <Title text='Tags'/>
      <div class='tags-container'>
        <a v-for='(_, tag) in tags' 
           class='tag-link' 
           href='#tagName' 
           @click='tagSwitcher(`${tag}`)'>
          <span class='theme-badge'>{{ tag }}</span> 
        </a>
      </div>
      <hr>
      <h3 id='tagName' class='tag-title' v-show='blogStore.selectedTag'>
        🔖 {{ blogStore.selectedTag }}
      </h3>
      <div class='tag-posts' v-show='blogStore.selectedTag'>
        <a v-for='post in tags[blogStore.selectedTag]' 
           class='tag-post-link' 
           :href='withBase(post.url)'>
          <div class='tag-post'>
            <div class='tag-post-title'>{{ post.title }}</div>
            <div class='tag-post-date'>{{ post.date.string.slice(0, 7) }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
