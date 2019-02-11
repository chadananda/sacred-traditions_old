<template>
  <div>
    <!-- <img v-if="article.img" :src="`/img/${article.img}`" :alt="article.title" class="arimg" /> -->
    <ImageWrapper id="ar_img" :src="article.img" :alt="article.title" :width="200" :height="200"></ImageWrapper>
    <h2>{{article.title}}</h2>
    <p id="article_author" v-if="article.author && article.author!='unknown'"> by {{article.author}} </p>
    <hr class="small"/>
    <nuxtent-body :body="article.body" />
  </div>
</template>

<script>
// This file handles any MD articles in the /content/articles folder.
//  import {NuxtentBody} from 'nuxtent'
import ImageWrapper from '~/components/ImageWrapper';

export default {
  layout: "article",
  // components: {NuxtentBody},
  components: { ImageWrapper },

  async asyncData({ app, route, payload }) {
    return {
      article: (await app.$content("articles").get(route.path)) || payload
    };
  },

  head() {
    return {
      title: `${this.article.title} - Sacred Traditions Interfaith Project`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.article.snip
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords: this.article.tags
        }
      ]
    };
  }
};
</script>


<style scoped>
  #article_author {font-style: italic;}
  #ar_img {
    width: 150px; float: right;
    padding: 5px; margin: 10px; margin-top: 0;
    border-radius: 50px 20px !important;
    border: 1px solid silver;
    box-shadow: 1px 1px 2px silver;
  }
</style>
