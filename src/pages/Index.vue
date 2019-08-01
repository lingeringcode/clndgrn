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
    <section id="materials">
      <div class="posts">
        <div id="research-container" class="col-md-6">
          <h2>Research</h2>
          <!-- Publications -->
          <div class="market-cards melodeon">
            <a @click="showRes = !showRes">
              <h3 tooltip="Click to expand/hide content">
                Publications
              </h3>
            </a>
            <transition name="slide-fade">
              <div v-if="showRes" id="research" class="market-content">
                <div id="inprogress">
                  <h5>
                      Under Review/Refereed
                  </h5>
                  <div class="content-test">
                    <ResearchInprogressRefereedCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.inprogress === true"
                      :key="edge.node.id"
                      :post="edge.node" />
                  </div>
                </div>
                <div id="refereed">
                  <h5>
                      Refereed (Selected)</h5>
                  <div class="content-test">
                    <ResearchRefereedCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.inprogress === false && edge.node.refereed === true"
                      :key="edge.node.id"
                      :post="edge.node"/>
                  </div>
                </div>
                <div id="non-refereed">
                  <h5>Non-Refereed</h5>
                  <div class="content-test">
                    <ResearchNonRefereedCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.refereed === false"
                      :key="edge.node.id"
                      :post="edge.node"/>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div id="teaching-container" class="col-md-6">
          <h2>Teaching</h2>
          <!-- Publications -->
          <div class="market-cards melodeon">
            <a @click="showCourse = !showCourse">
              <h3 tooltip="Click to expand/hide content">
                Courses
              </h3>
            </a>
            <transition name="slide-fade">
              <div v-if="showCourse" id="courses" class="market-content">
                <div>
                  <div class="content-test">
                    <TeachingCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.type === 'Course'"
                      :key="edge.node.id"
                      :post="edge.node" />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div id="grants-container" class="col-md-6">
          <h2>Grants</h2>
          <!-- Publications -->
          <div class="market-cards melodeon">
            <a @click="showGrant = !showGrant">
              <h3 tooltip="Click to expand/hide content">
                Projects
              </h3>
            </a>
            <transition name="slide-fade">
              <div v-if="showGrant" id="grants" class="market-content">
                <div>
                  <div class="content-test">
                    <GrantCard
                      v-for="edge in $page.posts.edges"
                      v-if="edge.node.grant === true"
                      :key="edge.node.id"
                      :post="edge.node" />
                  </div>
                </div>
              </div>
            </transition>
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
          university
          granttitle
          grantamount
          grant
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
  import Author from '~/components/Author.vue'
  import ResearchRefereedCard from '~/components/ResearchRefereedCard.vue'
  import ResearchNonRefereedCard from '~/components/ResearchNonRefereedCard.vue'
  import ResearchInprogressRefereedCard from '~/components/ResearchInprogressRefereedCard.vue'
  import TeachingCard from '~/components/TeachingCard.vue'
  import GrantCard from '~/components/GrantCard.vue'

  export default {
    data: function() {
      return {
        showRes: false,
        showCourse: false,
        showGrant: false
      };
    },
    components: {
      Author,
      ResearchRefereedCard,
      ResearchNonRefereedCard,
      ResearchInprogressRefereedCard,
      TeachingCard,
      GrantCard
    },
    metaInfo: {
      title: 'Home'
    }
  }
</script>

<style>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .msg.v-enter, .msg.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>
