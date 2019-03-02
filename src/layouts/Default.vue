<template>
  <div id="page" class="site">
    <SkipContent/>
    <Slider/>
    <Header/>
    <ContentWrapper>
      <slot/>
    </ContentWrapper>
    <Footer :articles="$static.allArticle.edges"/>
  </div>
</template>

<script>
import config from '~/.temp/config.js'
import Header from '~/components/Header.vue'
import SkipContent from '~/components/SkipContent.vue'
import Slider from '~/components/Slider.vue'
import ContentWrapper from '~/components/ContentWrapper.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Header, SkipContent, Slider, ContentWrapper, Footer },
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  }
}
</script>

<static-query>
  query DefaultLayoutQuery ($page: Int) {
    allArticle (page: $page, filter: { language: { eq: "en" }}) {
      edges {
        node {
          title
          author
          pubdate
          img
          snip
          language
          path
          likes
          tags
          category
        }
      }
    }
  }
</static-query>


<style scoped>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
