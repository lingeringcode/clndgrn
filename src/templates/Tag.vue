<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="publications">
      <h3>Publications</h3>
      <ResearchRefereedCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :publication="edge.node"/>
    </div>

    <div class="courses">
      <h3>Courses</h3>
      <TeachingCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :course="edge.node"/>
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
            ...on Publication {
              title
              date
              pubURL
              type
              authors
              journal
              collection
              path
              abstract
              coverImage (width: 220, blur: 10)
              content
            }
            ...on Course {
              title
              authors
              date
              url
              type
              path
              coverImage (width: 220, blur: 10)
              content
            }
            ...on Grant {
              title
              authors
              type
              path
              description
              coverImage (width: 220, blur: 10)
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
import TeachingCard from '~/components/TeachingCard.vue'
import GrantCard from '~/components/GrantCard.vue'
// import ResearchInProgressCard from '~/components/ResearchInProgressCard.vue'
import ResearchRefereedCard from '~/components/ResearchRefereedCard.vue'
import ResearchNonRefereedCard from '~/components/ResearchNonRefereedCard.vue'

export default {
  components: {
    Author,
    TeachingCard,
    GrantCard,
    // ResearchInProgressCard,
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
