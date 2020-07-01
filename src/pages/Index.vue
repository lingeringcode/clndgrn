<template>
  <Layout :show-logo="true">

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
          I am also interested in applying computational social science methods to feminist and anti-racist rhetorical theories, as a means to differently understand social relationships in digital environments. I am currently collaborating on a project that examines Twitter discourse surrounding Trump's plans to build the border wall before, during, and after his administration's zero-tolerance immigration policy that separated children from their families.
        </p>
        <p>
          You can reach me at lindgren@vt.edu or find me on Twitter as <a href="https://twitter.com/lndgrn" target="_blank" title="Link to Lindgren's Twitter account.">@lndgrn</a>.<br /><br />Here is my CV [<a href="/assets/docs/clindgrencv.pdf" target="_blank" rel="noopener">PDF</a>] for more information.
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
                  <div class="content-test">
                    <div class="course-modal-width">
                      <h5>Under Review / In-Progress</h5>
                      <ResearchInProgressCard
                        v-for="edge in $page.publications.edges"
                        v-if="edge.node.process === 'inprogress'"
                        :key="edge.node.id"
                        :publication="edge.node" />
                    </div>
                  </div>
                </div>
                <div id="refereed">
                  <div class="content-test">
                    <div class="course-modal-width">
                      <h5>Refereed</h5>
                      <ResearchRefereedCard
                        v-for="edge in $page.publications.edges"
                        v-if="edge.node.process === 'published' && edge.node.refereed === true"
                        :key="edge.node.id"
                        :publication="edge.node"/>
                    </div>
                  </div>
                </div>
                <div id="refereed">
                  <div class="content-test">
                    <div class="course-modal-width">
                      <h5>Non-Refereed</h5>
                      <ResearchRefereedCard
                        v-for="edge in $page.publications.edges"
                        v-if="edge.node.process === 'published' && edge.node.refereed === false"
                        :key="edge.node.id"
                        :publication="edge.node"/>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div id="teaching-container" class="col-md-6">
          <h2>Teaching</h2>
          <!-- Teaching -->
          <div class="market-cards melodeon">
            <a @click="showCourse = !showCourse">
              <h3 tooltip="Click to expand/hide content">
                Courses
              </h3>
            </a>
            <transition name="slide-fade">
              <div v-if="showCourse" id="courses" class="market-content">
                <div>
                  <div id="teaching-vt" class="content-test">
                    <h5>
                      Virginia Tech
                    </h5>
                    <TeachingCard
                      v-for="edge in $page.courses.edges"
                      v-if="edge.node.university === 'Virginia Tech'"
                      :key="edge.node.id"
                      :course="edge.node" />
                  </div>
                  <div id="teaching-umn" class="content-test">
                    <h5>
                      University of Minnesota
                    </h5>
                    <TeachingCard
                      v-for="edge in $page.courses.edges"
                      v-if="edge.node.university === 'University of Minnesota'"
                      :key="edge.node.id"
                      :course="edge.node" />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div id="grants-container" class="col-md-6">
          <h2>Grants</h2>
          <!-- Grants -->
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
        <div id="dataviz-container" class="col-md-6">
          <h2>Computational</h2>
          <!-- Computational -->
          <div class="market-cards melodeon">
            <a @click="showComputational = !showComputational">
              <h3 tooltip="Click to expand/hide content">
                Projects
              </h3>
            </a>
            <transition name="slide-fade">
              <div v-if="showComputational" id="dataviz" class="market-content">
                <div>
                  <div class="content-test">
                    <ComputationalCard
                      v-for="edge in $page.computational.edges"
                      :key="edge.node.id"
                      :computational="edge.node" />
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
    },
    courses: allCourse {
      edges {
        node {
          type
          id
          title
          university
          url
          path
          tags {
            id
            title
            path
          }
          date
          description
          coverImage (width: 220)
          ...on Course {
              id
              title
              path
          }
        }
      }
    },
    computational: allComputational {
      edges {
        node {
          type
          id
          title
          url
          path
          tags {
            id
            title
            path
          }
          date
          description
          coverImage (width: 220)
          ...on Computational {
              id
              title
              path
          }
        }
      }
    },
    posts: allPost {
      edges {
        node {
          type
          id
          title
          granttitle
          grantamount
          grant
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
  import ResearchRefereedCard from '~/components/ResearchRefereedCard.vue'
  import ResearchNonRefereedCard from '~/components/ResearchNonRefereedCard.vue'
  import ResearchInProgressCard from '~/components/ResearchInProgressCard.vue'
  import TeachingCard from '~/components/TeachingCard.vue'
  import GrantCard from '~/components/GrantCard.vue'
  import ComputationalCard from '~/components/ComputationalCard.vue'

  export default {
    data: function() {
      return {
        showRes: false,
        showCourse: false,
        showGrant: false,
        showComputational: false
      };
    },
    components: {
      ResearchRefereedCard,
      ResearchNonRefereedCard,
      ResearchInProgressCard,
      TeachingCard,
      GrantCard,
      ComputationalCard
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