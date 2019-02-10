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
  convert: function(d) {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp)
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
        d.constructor === Date ? d :
        d.constructor === Array ? new Date(d[0],d[1],d[2]) :
        d.constructor === Number ? new Date(d) :
        d.constructor === String ? new Date(d) :
        typeof d === "object" ? new Date(d.year,d.month,d.date) :
        NaN
    )
  },

},
};
</script>
