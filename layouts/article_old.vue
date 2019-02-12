<template>
  <div id="content" class="site-content">
    <Header/>
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <div class="container">
          <div class>
            <div class="col-md-8 col-md-offset-2">
              <div class="site-entry">
                <!-- <Article/> -->
                <nuxt/>

                <PrevNext  />

                <!-- <Authbio/> -->

                <Posts/>

                <!-- <Comments/> -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PrevNext from "~/components/article/PrevNext.vue";
import Article from "~/components/article/Article.vue";
import Authbio from "~/components/article/Authbio.vue";
import Posts from "~/components/article/Posts.vue";
import Comments from "~/components/article/Comments.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    PrevNext,
    Article,
    Authbio,
    Posts,
    Comments,
    Header,
    Footer
  },
};
</script>
