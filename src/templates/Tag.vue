<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <ResearchRefereedCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            coverImage (width: 860, blur: 10)
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import ResearchInprogressRefereedCard from '~/components/ResearchInprogressRefereedCard.vue'
import ResearchRefereedCard from '~/components/ResearchRefereedCard.vue'
import ResearchNonRefereedCard from '~/components/ResearchNonRefereedCard.vue'

export default {
  components: {
    Author,
    ResearchInprogressRefereedCard,
    ResearchRefereedCard,
    ResearchNonRefereedCard
  },
  metaInfo: {
    title: 'Tags'
  }
}
</script>

<style lang="scss">

</style>
