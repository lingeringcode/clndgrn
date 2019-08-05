<template>
  <Layout :show-logo="true">

    <!-- List posts -->
    <section id="dv-materials">
      <div class="posts">
        <div id="dataviz-container">
          <h2>Data Visualizations</h2>
          <!-- Publications -->
          <div class="market-cards melodeon">
              <div id="courses" class="market-content">
                <div>
                  <div class="content-test">
                    <DatavizCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.type === 'DataViz'"
                      :key="edge.node.id"
                      :post="edge.node" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
  {
    posts: allPost {
      edges {
        node {
          type
          inprogress
          refereed
          id
          title
          pubURL
          path
          tags {
            id
            title
            path
          }
          date
          description
          coverImage (width: 220)
          ...on Post {
              id
              title
              path
          }
        }
      }
    }
  }
</page-query>

<script>
  import DatavizCard from '~/components/DatavizCard.vue'

  export default {
    components: {
      DatavizCard
    },
    metaInfo: {
      title: 'Data Visualizations',
      meta: [
        { name: 'author', content: 'Chris Lindgren' }
      ]
      // etc...
    }
  }
</script>
