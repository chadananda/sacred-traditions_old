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
                            <ImageWrapper :src="`${article.path}`" :alt="``" :width="223" :height="223"></ImageWrapper>
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
        data: () => {
            return {
                alsoLikes: [
                    {
                        path: 'article_assets/Dhirendra-Brahmachari.jpeg',
                        title: 'Thomas Merton Memoirs about Interfaith',
                        date: 'Oct 27, 2016'
                    },
                    {
                        path: 'article_assets/What-if-Artificial-Intelligence-Was-Enlightened-1038x583.jpg',
                        title: 'On Enlightening the Mind',
                        date: 'Aug 14, 2016'
                    },
                    {
                        path: 'article_assets/adam-and-eve-with-the-infants-cain-and-abel-lorenzo-de-ferrari.jpg',
                        title: 'Be Like Adam’s Son',
                        date: 'Aug 02, 2016'
                    }
                ]
            }
        }
    };
</script>

<style scoped>

</style>