<template>
    <div class="course-modal-width">
      <div class="portfolio-item-container">
        <div class="content">
          <div class="body">
            <img  class="pi-image"
              v-if="computational.coverImage"
              :src="computational.coverImage" />
            <div>
              <a :href="computational.url" target="_blank" rel="noopener">
                <h6 v-html="computational.title" />
              </a>
            </div>
            <div style="grid-column:1/3;">
              <ComputationalTags class="post-card__tags" :computational="computational" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ComputationalTags from '~/components/ComputationalTags'

  export default {
    components: {
      ComputationalTags
    },
    props: ['computational'],
  }
</script>
