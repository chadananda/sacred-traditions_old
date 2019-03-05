<template>
    <div class="related-posts">
        <template v-if="alsoLikes">
        <div class="section-title">
            <h3>You May Also Like</h3>
        </div>
        <div class="row" >
            <div class="col-sm-4" v-for="(edge, index) in alsoLikes" :key="index">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <g-link :to="edge.node.path">
                            <ImageWrapper :src="`${edge.node.img}`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </g-link>
                    </div>
                    <h3 class="post-title">
                        <g-link :to="edge.node.path">
                            {{ edge.node.title }}
                        </g-link>
                    </h3>
                    <span class="post-meta">
                        <g-link :to="edge.node.path">
                            {{ new Date(edge.node.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}
                        </g-link>
                    </span>
                </div>
            </div>
        </div>
        </template>
    </div>
</template>

<script>
    import ImageWrapper from '~/components/ImageWrapper';
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
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
        }
    };
</script>

<style scoped>

</style>
