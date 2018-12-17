<template>
  <div>
    <!-- content -->
    <div id="content" class="site-content">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

           <RecentArticles list-style="full" article-count="10" />

        </main><!-- #main -->
      </div><!-- #primary -->
    </div><!-- #content -->
  </div>
</template>


<script>
import RecentArticles from "~/components/RecentArticles"

export default {
  components: { RecentArticles },
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




