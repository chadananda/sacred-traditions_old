<template>
  <div>
    <!-- <nuxtent-body :body="article.body" /> -->
    <div v-html="article.body"/>
  </div>
</template>

<script>
// This file handles any MD articles in the /content/articles folder.
//  import {NuxtentBody} from 'nuxtent'

export default {
  layout: "article",
  // components: {NuxtentBody},

  async asyncData({ app, route }) {
    return {
      article: await app.$content("articles").get(route.path)
      // contentPreview: await app.$content('/')
      //   .query({ exclude: ['attributes', 'body'] })
      //   .getAll()
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
