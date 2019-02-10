<template>
  <div class="recentArticles">
    <template v-for="(article, index) in articles">
      <ArticleSummaryFirst v-if="index===0" :article="article" :key="index"/>
      <ArticleSummary v-else :article="article" :key="index"/>
    </template>
  </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
// import ArticleSidebar from "~/components/articles/ArticleSidebar"

export default {
  props: ["_articles", "articleCount"],
  components: { ArticleSummary, ArticleSummaryFirst },
  computed: {
    articles() {
      // sorted by date, trimmed to 6 items
      return this.$store.getters['articles/getRecentArticles'].slice(0, 6)
    }
  },
  methods: {


},
};
</script>
