<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <div class="container">
          <div class="">
            <div class="col-md-8 col-md-offset-2">
              <div class="site-entry">
                <Article/>
                <Navigation/>
                <Authbio/>
                <Posts/>
                <Comments/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import Navigation from "~/components/article/Navigation.vue";
  import Article from "~/components/article/Article.vue";
  import Authbio from "~/components/article/Authbio.vue";
  import Posts from "~/components/article/Posts.vue";
  import Comments from "~/components/article/Comments.vue";

  export default {
    components: {
      Navigation,
      Article,
      Authbio,
      Posts,
      Comments
    }
  };
</script>
