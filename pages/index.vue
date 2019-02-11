<template>
    <div class="row">
      <!-- articles -->
      <div class="col-md-8">
        <div class="site-entry">
          <div class="recentArticles">
            <template v-for="(article, index) in articles">
              <ArticleSummaryFirst v-if="index===0" :article="article" :key="index"/>
              <ArticleSummary v-else :article="article" :key="index"/>
            </template>
          </div>
          <Pagination name="Posts Navigation" prevText="Older Posts" nextText="Newer Posts"/>
        </div>
      </div>
      <!-- .col-md-8 -->
      <ArticleSidebar/>
    </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary"
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst"
import ArticleSidebar from "~/components/articles/ArticleSidebar"
import Pagination from "~/components/Pagination"

export default {
  components: { ArticleSidebar, Pagination, ArticleSummary, ArticleSummaryFirst },

  head() {
    return {
      title: "Sacred Traditions Interfaith Project",
      meta: [
        { hid: "description", name: "description", content: "Sacred Traditions Interfaith Project" }
      ],
    }
  },

  computed: {
    articles() {
      return this.$store.getters['articles/getRecentArticles'].slice(0, 6)
    }
  },
}
</script>
