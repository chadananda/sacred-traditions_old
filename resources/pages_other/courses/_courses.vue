<template>
  <div>
    <!-- <nuxtent-body :body="article.body" /> -->
    <div v-html="course.body"/>
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
      course: await app.$content("courses").get(route.path)
      // contentPreview: await app.$content('/')
      //   .query({ exclude: ['attributes', 'body'] })
      //   .getAll()
    };
  },

  head() {
    return {
      title: `${this.course.title} - Sacred Traditions Interfaith Project`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.course.snip
        },
        {
          hid: "keywords",
          name: "keywords",
          keywords: this.course.tags
        }
      ]
    };
  }
};
</script>
