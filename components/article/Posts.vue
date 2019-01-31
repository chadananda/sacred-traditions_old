<template>
    <div class="related-posts">
        <div class="section-title">
            <h3>You May Also Like</h3>
        </div>
        <div class="row" >
            <div class="col-sm-4" v-for="(article, index) in alsoLikes" :key="index">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <nuxt-link :to="article.permalink">
                            <ImageWrapper :src="`${article.img}`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </nuxt-link>
                    </div>
                    <h3 class="post-title">
                        <nuxt-link :to="article.permalink">
                            {{ article.title }}
                        </nuxt-link>
                    </h3>
                    <span class="post-meta">
                        <nuxt-link :to="article.permalink">
                            {{ article.date }}
                        </nuxt-link>
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
                let articles = this.$store.getters.getArticles.slice() // get copy of articles
                this.shuffleArray(articles) // randomize
                articles = articles.slice(0, 3) // pick three
                return articles
            }
        },
        methods: {
          shuffleArray: function(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
          }
        }
    };
</script>

<style scoped>

</style>