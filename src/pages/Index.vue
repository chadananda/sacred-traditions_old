<template>
    <DefaultLayout>
        <div class="row">
            <!-- articles -->
            <div class="col-md-8">
                <div class="site-entry">
                    <div class="recentArticles">
                        <template v-for="(edge, index) in articles">
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
    </DefaultLayout>
</template>

<page-query>
    query Home ($page: Int) {
        allArticle (page: $page, filter: { language: { eq: "en" }}, sortBy: "pubdate", order: DESC) {
            edges {
                node {
                    title
                    author
                    pubdate
                    img
                    snip
                    language
                    path
                    likes
                    tags
                    category
                }
            }
        }
    }
</page-query>

<script>
    import DefaultLayout from '~/layouts/Default.vue'
    import ArticleSummaryFirst from '~/components/articles/ArticleSummaryFirst.vue'
    import ArticleSummary from '~/components/articles/ArticleSummary.vue'
    import ArticleSidebar from '~/components/articles/ArticleSidebar.vue'
    import Pagination from '~/components/Pagination.vue'
    export default {
        components: { DefaultLayout, ArticleSummaryFirst, ArticleSummary, Pagination, ArticleSidebar },
        metaInfo: {
            title: "Sacred Traditions Interfaith Project",
            meta: [
                { hid: "description", name: "description", content: "Sacred Traditions Interfaith Project" }
            ]
        },
        mounted() {
            this.$store.commit('SET_ARTICLES', this.$page.allArticle.edges)
        },
        computed: {
            articles() {
                return this.$store.getters.getArticles.slice(0, 6)
            }
        }
    }
</script>
