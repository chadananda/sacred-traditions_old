<template>
    <Layout>
        <div class="row">
            <!-- articles -->
            <div class="col-md-8">
                <div class="site-entry">
                    <div class="recentArticles">
                        <template v-for="(edge, index) in $page.allArticle.edges">
                            <ArticleSummaryFirst v-if="index===0" :article="edge.node" :key="index"/>
                            <ArticleSummary v-else :article="edge.node" :key="index"/>
                        </template>
                    </div>
                    <Pagination name="Posts Navigation" prevText="Older Posts" nextText="Newer Posts"/>
                </div>
            </div>
            <!-- .col-md-8 -->
            <ArticleSidebar/>
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
    import ArticleSummary from '~/components/articles/ArticleSummary.vue'
    import ArticleSidebar from '~/components/articles/ArticleSidebar.vue'
    import Pagination from '~/components/Pagination.vue'
    export default {
        components: { Layout, ArticleSummaryFirst, ArticleSummary, Pagination, ArticleSidebar },
        metaInfo: {
            title: "Sacred Traditions Interfaith Project",
            meta: [
                { hid: "description", name: "description", content: "Sacred Traditions Interfaith Project" }
            ]
        }
    }
</script>
