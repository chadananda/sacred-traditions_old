<template>
    <div class="related-posts">
        <div class="section-title">
            <h3>You May Also Like</h3>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <a href="#">
                            <ImageWrapper :src="`article_assets/Dhirendra-Brahmachari.jpeg`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </a>
                    </div>
                    <!-- .post-thumbnail -->
                    <h3 class="post-title">
                        <a href="#">Thomas Merton Memoirs about Interfaith</a>
                    </h3>
                    <span class="post-meta">
            <a href="#">Oct 27, 2016</a>
          </span>
                </div>
                <!-- .post-container -->
            </div>
            <!-- .col-md-3 -->
            <div class="col-sm-4">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <a href="#">
                            <ImageWrapper :src="`article_assets/What-if-Artificial-Intelligence-Was-Enlightened-1038x583.jpg`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </a>
                    </div>
                    <!-- .post-thumbnail -->
                    <h3 class="post-title">
                        <a href="#">On Enlightening the Mind</a>
                    </h3>
                    <span class="post-meta">
            <a href="#">Aug 14, 2016</a>
          </span>
                </div>
                <!-- .post-container -->
            </div>
            <!-- .col-md-3 -->
            <div class="col-sm-4">
                <div class="post-container">
                    <div class="post-thumbnail">
                        <a href="#">
                            <ImageWrapper :src="`article_assets/adam-and-eve-with-the-infants-cain-and-abel-lorenzo-de-ferrari.jpg`" :alt="``" :width="223" :height="223"></ImageWrapper>
                        </a>
                    </div>
                    <!-- .post-thumbnail -->
                    <h3 class="post-title">
                        <a href="#">Be Like Adam’s Son</a>
                    </h3>
                    <span class="post-meta">
            <a href="#">Aug 02, 2016</a>
          </span>
                </div>
                <!-- .post-container -->
            </div>
            <!-- .col-md-3 -->
        </div>
        <!-- .row -->
    </div>
</template>

<script>
    import ImageWrapper from '~/components/images/ImageWrapper';
    export default {
        components: { ImageWrapper },
        name: "Posts"
    };
</script>

<style scoped>

</style>