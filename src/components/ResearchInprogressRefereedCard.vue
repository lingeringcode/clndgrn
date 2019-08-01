<template v-if="post.inprogress === true">
    <div class="course-modal-width" :class="{'post-card--has-poster' : post.poster}">
      <div class="portfolio-item-container">
        <div class="content">
          <div class="body">
            <img  class="pi-image"
              v-if="post.coverImage"
              :src="post.coverImage" />
            <div>
              <a :href="post.pubURL" target="_blank" rel="noopener">
                <h6 v-html="post.title" />
              </a>
            </div>
            <PostMeta class="post-card__meta" :post="post" />
            <PostTags class="post-card__tags" :post="post" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import PostMeta from '~/components/PostMeta'
  import PostTags from '~/components/PostTags'

  export default {
    components: {
      PostMeta,
      PostTags
    },
    props: ['post'],
  }
</script>
