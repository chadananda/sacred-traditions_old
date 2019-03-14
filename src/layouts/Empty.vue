<template>
    <div id="content">
        <!-- <SkipContent/> -->
        <slot/>
    </div>
</template>

<static-query>
    query EmptyLayoutQuery ($page: Int) {
        allArticle (page: $page, sortBy: "pubdate", order: DESC) {
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
</static-query>

<script>
//   import SkipContent from '~/components/SkipContent.vue'
  import articleMixin from '~/mixins/saveArticles.js'
  export default {
    name: "Empty",
    components: {  },
    mixins: [articleMixin]
  };
</script>

<style scoped>
    #content {margin: 20px; padding-right: 20px;}
</style>
