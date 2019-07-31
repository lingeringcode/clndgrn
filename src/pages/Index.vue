<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- ABOUT -->
    <section id="about">
      <div id="viz-about-item">
        <h2>About Chris</h2>
        <p>
          I'm an Assistant Professor of Technical Communication &amp; Data Visualization in the <a href="https://liberalarts.vt.edu/departments-and-schools/department-of-english/faculty/chris-aaron-lindgren.html" target="_blank" rel="noopener">English Department at Virginia Tech</a>, where I teach courses in technical communication, literacies, and rhetorics of technology.
        </p>
        <p>
          My past research investigated the uptick and uptake of coding as a form of literacy across educational and professional contexts. My recent research engages questions about understanding how coding is a culturally dynamic form of writing. Through this research, I hope to help explain how written languages have always been tied to computation and programmatic motives. I am currently preparing publications on a case-study of a web developer, whose coding supported data-journalism work to find and tell stories with large sets of data.
        </p>
        <p>
          I am also interested in applying computational social science methods to feminist-rhetorical theories, as a means to differently understand social relationships in digital environments. I am currently collaborating on a project that examines Twitter discourse surrounding Trump's plans to build the border wall before, during, and after his administration's separation of asylum-seeking families.
        </p>
        <p>
          You can reach me at lindgren@vt.edu or find me on Twitter as <a href="https://twitter.com/lndgrn" target="_blank" title="Link to Lindgren's Twitter account.">@lndgrn</a>.<br /><br />Here is my CV [<a href="assets/docs/clindgrencv.pdf" target="_blank" rel="noopener">PDF</a>] for more information.
        </p>
      </div>
    </section>

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
  {
    posts: allPost {
      edges {
        node {
          id
          title
          path
          tags {
            id
            title
            path
          }
          date (format: "D. MMMM YYYY")
          timeToRead
          description
          coverImage (width: 770, height: 380, blur: 10)
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
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
