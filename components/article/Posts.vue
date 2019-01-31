<template>
    <div class="related-posts">
        <div class="section-title">
            <h3>You May Also Like</h3>
        </div>
        <div class="row" >
            <div class="col-sm-4" v-for="(article, index) in alsoLikes" :key="index">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <a href="#">
                            <ImageWrapper :src="`${article.img}`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </a>
                    </div>
                    <h3 class="post-title">
                        <a href="#">
                            {{ article.title }}
                        </a>
                    </h3>
                    <span class="post-meta">
                        <a href="#">
                            {{ article.date }}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageWrapper from '~/components/images/ImageWrapper';
    export default {
        components: { ImageWrapper },
        name: "Posts",
        computed: {
            alsoLikes() {
                const articles = this.$store.getters.getArticles;
                return articles.slice(0, 3);
            }
        }
    };
</script>

<style scoped>

</style>