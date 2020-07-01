<template>
      <div class="portfolio-item-container">
        <div class="content">
          <div class="body">
            <img  class="pi-image"
              v-if="course.coverImage"
              :src="course.coverImage" />
            <div>
              <a :href="course.url" target="_blank" rel="noopener">
                <h6 v-html="course.title" />
              </a>
            </div>
            
            <div style="grid-column:1/3;">
              <CourseTags class="post-card__tags" :course="course" />
            </div>

          </div>
        </div>
      </div>
</template>

<script>
  import CourseTags from '~/components/CourseTags'

  export default {
    components: {
      CourseTags
    },
    props: ['course'],
  }
</script>
