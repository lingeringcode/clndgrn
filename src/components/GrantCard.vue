<template>
    <div class="course-modal-width">
      <div class="portfolio-item-container">
        <div class="content">
          <div class="body">
            <img  class="pi-image"
              v-if="grant.coverImage"
              :src="grant.coverImage" />
            <div>
              <p>{{grant.authors}}. <a v-if="grant.url" :href="grant.url" target="_blank" rel="noopener">{{grant.title}}</a><span v-else>{{grant.title}}</span>. ({{grant.date}}). {{grant.granttitle}}</p>
              <p>
                Amount: <span v-html="grant.grantamount" />
              </p>
            </div>
            <g-link class="post-card__link" :to="grant.url">Link</g-link>
            <div style="grid-column:1/3;">
              <GrantTags class="post-card__tags" :grant="grant" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import GrantTags from '~/components/GrantTags'

  export default {
    components: {
      GrantTags
    },
    props: ['grant'],
  }
</script>
