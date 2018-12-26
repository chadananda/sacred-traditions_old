<template><div>

  <h3> &nbsp; Articles: </h3>
  <div v-for="(ar, id) in articles" :key="id">
    <img v-if="ar.img" :src="`/img/${ar.img}`" :alt="ar.title" class="thumb" />
    <h3><nuxt-link :to="ar.permalink">{{ar.title}}</nuxt-link></h3>
    <pre>{{ar}}</pre>
    <hr>
  </div>

</div></template>




<script>
export default {
  layout: "empty",
  async asyncData ({ app }) {
    return {
      articles: await app.$content('/articles').query({ exclude: ['body'] }).getAll()
    }
  }
}
</script>

<style scoped>
  img.thumb {
    width: 200px; float: right;
    padding: 5px; margin: 10px;
    border-radius: 50px 20px !important;
    border: 1px solid silver;
    box-shadow: 1px 1px 2px silver;
  }
</style>