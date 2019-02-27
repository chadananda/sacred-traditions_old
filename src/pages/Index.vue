<template>
    <Layout>
        <div class="row">
            <!-- articles -->
            <div class="col-md-8">
                <div class="site-entry">
                    <div class="recentArticles">
                        <template v-for="(edge, index) in $page.allArticle.edges">
                            <ArticleSummaryFirst v-if="index===0" :article="edge.node" :key="index"/>
                            <!--<ArticleSummary v-else :article="article" :key="index"/>-->
                        </template>
                    </div>
                    <!--<Pagination name="Posts Navigation" prevText="Older Posts" nextText="Newer Posts"/>-->
                </div>
            </div>
            <!-- .col-md-8 -->
            <!--<ArticleSidebar/>-->
        </div>
    </Layout>
</template>

<page-query>
    query Home ($page: Int) {
        allArticle (page: $page, filter: { language: { eq: "en" }}) {
            edges {
                node {
                    _id
                    title
                    author
                    pubdate
                    img
                    snip
                    language
                    path
                    likes
                    category
                }
            }
        }
    }
</page-query>

<script>
    import Layout from '~/layouts/Default.vue'
    import ArticleSummaryFirst from '~/components/articles/ArticleSummaryFirst.vue'
    // import ArticleSummary from '~/components/articles/ArticleSummary.vue'
    // import ArticleSidebar from '~/components/articles/ArticleSidebar.vue'
    export default {
        components: { Layout, ArticleSummaryFirst }
    }
</script>

<style scoped>
  .home >>> .heading {
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>
