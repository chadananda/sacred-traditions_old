<template>
  <div class="recentArticles">
    <template v-for="(article, index) in _articles">
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
  components: { ArticleSummary, ArticleSummaryFirst }
};
</script>
