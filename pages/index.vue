<template>
  <Wrapper>
    <div class="row">
      <!-- articles -->
      <div class="col-md-8">
        <div class="site-entry">
          <RecentArticles :_articles="articlesByLang"/>
          <Pagination name="Posts Navigation" prevText="Older Posts" nextText="Newer Posts"/>
        </div>
      </div>
      <!-- .col-md-8 -->
      <ArticleSidebar :_articles="articlesByLang"/>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "~/components/wrapper/Wrapper";
import RecentArticles from "~/components/articles/RecentArticles";
import ArticleSidebar from "~/components/articles/ArticleSidebar";
import Pagination from "~/components/pagination/Pagination";

export default {
  components: { Wrapper, RecentArticles, ArticleSidebar, Pagination },
  asyncData: async ( { app } ) => {
    return {
      articles: await app.$content('/articles').query({ exclude: ['body'] }).getAll()
    }
  },
  computed: {
    articlesByLang() {
      const articles = [];
      this.articles.forEach(article => {
        if (article.language === 'en') {
          articles.push(article);
        }
      });
      this.$store.commit('setArticles', articles);
      return articles;
    }
  },

  data() {
    return {
      title: "Sacred Traditions Interfaith Project"
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Sacred Traditions Interfaith Project" }
      ]
    };
  }
};
</script>
