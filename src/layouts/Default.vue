<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <p>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png">
        </a>
        <br>
        Unless stated or defined otherwise, all content by Chris Lindgren is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>. This page is not an official <a href="http://liberalarts.vt.edu/departments-and-schools/department-of-english.html">Virginia Tech</a> site.
      </p>
      <ul class="btn-social social-nav social-icon-sizing">
        <li>
          <a href="https://twitter.com/lndgrn" target="_blank" rel="noopener">
            <i class="fa fa-twitter fa-1x"></i>
          </a>
          <span class="screen-reader-text-for-icons">Twitter</span>
        </li>
        <li>
          <a href="https://github.com/lingeringcode" target="_blank" rel="noopener">
            <i class="fa fa-github-alt"></i>
          </a>
          <span class="screen-reader-text-for-icons">Github</span>
        </li>
      </ul>
    </footer>

  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import ToggleTheme from '~/components/ToggleTheme.vue'

  export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: var(--header-height);
    padding: 0 calc(var(--space) / 2);
    top:0;
    z-index: 10;

    &__left,
    &__right {
      display: flex;
      align-items: center;
    }

    @media screen and (min-width: 1300px) {
      //Make header sticky for large screens
      position: sticky;
      width: 100%;
    }
  }

  .main {
    margin: 0 auto;
    padding: 1.5vw 15px 0;
  }

  .footer {
    padding: calc(var(--space) / 2);
    font-size: .8em;

    > span {
      margin: 0 .35em;
    }

    a {
      color: currentColor;
    }
  }
</style>
