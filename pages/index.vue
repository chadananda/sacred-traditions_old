<template>
  <div>
    <!-- content -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

          <div class="container">
            <div class="row">
              <!-- articles -->
              <div class="col-md-8">
                <div class="site-entry">

                <RecentArticles />

                  <nav class="navigation posts-navigation" role="navigation">
                    <h2 class="screen-reader-text">Posts navigation</h2>
                    <div class="nav-links">
                      <div class="nav-previous"><a href="#">Older posts</a></div>
                      <div class="nav-next"><a href="#">Newer posts</a></div>
                    </div>
                  </nav> <!-- .navigation -->
                </div>
              </div><!-- .col-md-8 -->

                <ArticleSidebar />

            </div><!-- .row -->
          </div><!-- .container -->


        </main><!-- #main -->
      </div><!-- #primary -->
    </div><!-- #content -->
  </div>
</template>


<script>
import RecentArticles from "~/components/RecentArticles"
import ArticleSidebar from "~/components/ArticleSidebar"

export default {
  components: { RecentArticles, ArticleSidebar },
  data () {
    return {
      title: 'Sacred Traditions Interfaith Project'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Sacred Traditions Interfaith Project' }
      ]
    }
  }
}
</script>




