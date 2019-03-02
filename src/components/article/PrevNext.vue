<template>
  <nav class="navigation post-navigation" role="navigation">
    <h2 class="screen-reader-text">Post navigation</h2>
    <div class="nav-links" v-if="nextArticle || prevArticle">
      <div class="nav-previous">
        <g-link :to="prevArticle.permalink" class="image-link">
          <ImageWrapper :src="prevArticle.img" :alt="prevArticle.title" :width="90" :height="90"></ImageWrapper>
        </g-link>
        <span>Previous</span>
        <g-link :to="prevArticle.permalink" class="prev-link" rel="prev">{{prevArticle.title}}</g-link>
      </div>
      <div class="nav-next">
        <g-link :to="nextArticle.permalink" class="image-link">
          <ImageWrapper :src="nextArticle.img" :alt="nextArticle.title" :width="90" :height="90"></ImageWrapper>
        </g-link>
        <span>Next</span>
        <g-link :to="nextArticle.permalink" class="next-link" rel="prev">{{nextArticle.title}}</g-link>
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
    mounted() {
      let that = this
      this.$nextTick(() => {
        let ar = this.article
        // get article list from same language
        let list = this.getArticlesbyLanguage(ar.language)
        // get index position of previous and next
        let pos = pos = list.map(ar => ar.permalink).indexOf(ar.permalink)
        let prev = pos -1; if (prev<0) prev = list.length-1
        let nxt = pos +1; if (nxt>list.length-1) nxt = 0
        // assign articles to buttons
        this.nextArticle = list[nxt]
        this.prevArticle = list[prev]
      })
    },
    computed: {
      currentLang() {
        return this.$store.getters['ux/currentLang']
      }
    },
    methods: {
      // return a list of articles matching the current article language and sorted by date
      getArticlesbyLanguage(lang) {
        return this.$store.getters['articles/getAllArticles'].filter(a => a.language == lang)
      }


    }

  }
</script>

<style scoped>
</style>
