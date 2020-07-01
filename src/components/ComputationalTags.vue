<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in computational.tags" :key="tag.id" :to="tag.path"><span>#</span>{{ tag.title }}</g-link>
    </div>
</template>

<script>
  export default {
    props: ['computational']
  }
</script>
