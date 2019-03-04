<template>
  <nav class="navigation post-navigation" role="navigation">
    <h2 class="screen-reader-text">Post navigation</h2>
    <div class="nav-links" v-if="nextArticle || prevArticle">
      <div class="nav-previous">
        <g-link :to="prevArticle.node.path" class="image-link">
          <ImageWrapper :src="prevArticle.node.img" :alt="prevArticle.node.title" :width="90" :height="90"></ImageWrapper>
        </g-link>
        <span>Previous</span>
        <g-link :to="prevArticle.node.path" class="prev-link" rel="prev">{{prevArticle.node.title}}</g-link>
      </div>
      <div class="nav-next">
        <g-link :to="nextArticle.node.path" class="image-link">
          <ImageWrapper :src="nextArticle.node.img" :alt="nextArticle.node.title" :width="90" :height="90"></ImageWrapper>
        </g-link>
        <span>Next</span>
        <g-link :to="nextArticle.node.path" class="next-link" rel="prev">{{nextArticle.node.title}}</g-link>
      </div>
    </div>
  </nav>
  <!-- .navigation -->
</template>

<script>
  import ImageWrapper from '~/components/ImageWrapper';
  export default {
    data: function () {
      return {
        nextArticle: null,
        prevArticle: null
      }
    },
    components: { ImageWrapper },
    name: "PrevNext",
    props: ["article"],
    watch: {
      article(newVal, oldVal) {
        this.getPrevNextArticles()
      }
    },
    mounted() {
      let that = this
      this.$nextTick(() => {
        let ar = this.article
        // get article list from same language
        let list = this.getArticlesByLanguage(ar.language)
        // get index position of previous and next
        let pos = list.map(ar => ar.node.path).indexOf(ar.path)
        let prev = pos - 1; if (prev<0) prev = list.length-1
        let nxt = pos + 1; if (nxt>list.length-1) nxt = 0
        // assign articles to buttons
        this.nextArticle = list[nxt]
        this.prevArticle = list[prev]
      })
    },
    methods: {
      // return a list of articles matching the current article language and sorted by date
      getArticlesByLanguage(lang) {
        return this.$store.getters.getAllArticles.filter(a => a.node.language === lang)
      },
      getPrevNextArticles() {
        let that = this
        this.$nextTick(() => {
          let ar = this.article
          // get article list from same language
          let list = this.getArticlesByLanguage(ar.language)
          // get index position of previous and next
          let pos = list.map(ar => ar.node.path).indexOf(ar.path)
          let prev = pos - 1; if (prev<0) prev = list.length-1
          let nxt = pos + 1; if (nxt>list.length-1) nxt = 0
          // assign articles to buttons
          this.nextArticle = list[nxt]
          this.prevArticle = list[prev]
        })
      }
    }

  }
</script>

<style scoped>
</style>
