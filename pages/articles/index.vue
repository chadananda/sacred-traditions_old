<template>
  <Wrapper>
    <div class="row">
      <div class="col-md-8">
        <div class="site-entry">
          <h3>Articles:</h3>
          <template v-for="(article, index) in articles">
            <ArticleSummaryFirst v-if="index===0" :article="article" :key="index" type="articles"/>
            <ArticleSummary v-else :article="article" :key="index" type="articles"/>
          </template>
          <Pagination name="Post Navigation" prevText="Older Post" nextText="Newer Post"/>
        </div>
        <p>This paragraph need to be ignored, will delete very soon.</p>
      </div>
      <ArticleSidebar/>
    </div>
  </Wrapper>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
import Wrapper from "~/components/wrapper/Wrapper";
import ArticleSidebar from "~/components/articles/ArticleSidebar";
import Pagination from "~/components/pagination/Pagination";

export default {
  layout: "articles",
  components: {
    ArticleSummary,
    ArticleSummaryFirst,
    Wrapper,
    ArticleSidebar,
    Pagination
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      //articles: await app.$content('/articles').query({ exclude: ['body'] }).getAll()
      articles: await app
        .$content("/articles")
        .query({ exclude: ["body"] })
        .getAll()
    };
  }
  // async asyncData ({ app }) {
  //   return {
  //      //articles: await app.$content('/articles').query({ exclude: ['body'] }).getAll()
  //   }
  // }
};
</script>

<style scoped>
img.thumb {
  width: 150px;
  float: right;
  padding: 5px;
  margin: 10px;
  border-radius: 50px 20px !important;
  border: 1px solid silver;
  box-shadow: 1px 1px 2px silver;
}
pre.details {
  font-size: 6pt;
}
</style>