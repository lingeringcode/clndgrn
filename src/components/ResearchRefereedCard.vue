<template>
  <div class="portfolio-item-container">
    <div class="content">
      <div class="body">

        <img  class="pi-image"
          v-if="publication.coverImage"
          :src="publication.coverImage" />

        <div>
          <p>
            <span v-html="publication.authors" />. 
            (<span v-html="publication.date" />). 
            <a :href="publication.pubURL" target="_blank" rel="noopener">
              <span v-html="publication.title" /></a>. 
              <span v-if="publication.type === 'article'">
                <em>{{publication.journal}}</em>
              </span>
              <span v-if="publication.type === 'chapter'">
                <em>{{publication.collection}}</em>
              </span>
              <span v-if="publication.volume && publication.issue">, <em>{{publication.volume}}</em>({{publication.issue}}).</span>
          </p>
        </div>

        <div style="grid-column:1/3;">
          <PublicationTags class="post-card__tags" :publication="publication" />
        </div>
      </div>
    </div>
  </div>
</template>

<page-query>
  {
    publications: allPublication {
      edges {
        node {
          type
          refereed
          process
          authors
          collection
          publisher
          selected
          id
          title
          journal
          volume
          issue
          pubURL
          path
          tags {
            id
            title
            path
          }
          date
          abstract
          coverImage (width: 220)
        }
      }
    }
  }
</page-query>

<script>
  // import PostMeta from '~/components/PostMeta'
  import PublicationTags from '~/components/PublicationTags'

  export default {
    components: {
      PublicationTags
    },
    props: ['publication'],
  }
</script>
