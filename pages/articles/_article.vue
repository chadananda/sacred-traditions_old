<template>
  <div id="content" class="site-content">
    <Header/>
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <div class="container">
          <div class>
            <div class="col-md-8 col-md-offset-2">
              <div class="site-entry">

        <ImageWrapper id="ar_img" :src="article.img" :alt="article.title" :width="200" :height="200"></ImageWrapper>
        <h2 id="article_title">{{article.title}}</h2>
        <p id="article_author" v-if="article.author && article.author!='unknown'"> by {{article.author}} </p>
          <hr class="small"/>
        <!-- <nuxtent-body :body="article.body" /> -->
        <div v-html="article.body" />

                <PrevNext :article="article" />

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
import ImageWrapper from '~/components/ImageWrapper'
import PrevNext from "~/components/article/PrevNext.vue"
import Authbio from "~/components/article/Authbio.vue"
import Posts from "~/components/article/Posts.vue"
import Comments from "~/components/article/Comments.vue"
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

export default {
  layout: "empty",

  components: { ImageWrapper, PrevNext, Authbio, Posts, Posts, Comments, Header, Footer },

  async asyncData({ app, route, payload }) {
    let path = route.path
    if (route.path.split('/')[3] === '') path = route.path.slice(0, route.path.length-1)
    return {
      article: (await app.$content("articles").get(path)) || payload
    }
  },

  head() {
    return {
      title: `${this.article.title} - Sacred Traditions Interfaith Project`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: this.article.snip },
        { hid: "keywords", name: "keywords", keywords: this.article.tags }
      ],

    }
  },
};
</script>


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
