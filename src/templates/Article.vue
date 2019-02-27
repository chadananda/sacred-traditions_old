<template>
  <div id="content" class="site-content">
    <Header/>
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <div class="container">
          <div class>
            <div class="col-md-8 col-md-offset-2">
              <div class="site-entry">

                <ImageWrapper id="ar_img" :src="$page.article.img" :alt="$page.article.title" :width="200" :height="200"></ImageWrapper>
                <h2 id="article_title">{{ $page.article.title}}</h2>
                <p id="article_author" v-if="$page.article.author && $page.article.author!='unknown'"> by {{ $page.article.author }} </p>
                <hr class="small"/>
                <div v-html="$page.article.content" />

                <!--<PrevNext :article="article" />-->

                <!-- <Authbio/> -->

                <!--<Posts/>-->

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
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import ImageWrapper from '~/components/ImageWrapper.vue'
  export default {
    components: { Header, Footer, ImageWrapper }
  }
</script>

<page-query>
  query Article ($path: String!) {
    article (path: $path) {
      title
      author
      pubdate
      img
      snip
      language
      content
    }
  }
</page-query>

<style scoped>
  /* Move to layout */
  #article_title {color: rgb(100, 97, 141)}
  #article_author {font-style: italic; color: rgb(89, 85, 141)}
  #ar_img {
    width: 150px; float: right;
    padding: 5px; margin: 10px; margin-top: 0;
    border-radius: 50px 20px !important;
    border: 1px solid silver;
    box-shadow: 1px 1px 2px silver;
  }
</style>
