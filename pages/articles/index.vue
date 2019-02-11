<template><div>
  <h3>  Articles: </h3>
  <div v-for="(ar, id) in articles" :key="id">
    <img v-if="ar.img" :src="`/img/${ar.img}`" :alt="ar.title" class="thumb" />
    <h3><nuxt-link :to="ar.permalink">{{ar.title}}</nuxt-link></h3>
    <pre class="details">{{ar}}</pre>
    <hr>
  </div>
</div></template>


<script>
  export default {
    layout: "empty",
    computed: {
      articles() {
        return this.$store.getters.getArticles;
      }
    }
  }
</script>

<style scoped>
  img.thumb {
    width: 150px; float: right;
    height: 150px;
    padding: 5px; margin: 10px;
    border-radius: 50px 20px !important;
    border: 1px solid silver;
    box-shadow: 1px 1px 2px silver;
    object-fit: cover;
    font-family: 'object-fit: cover;';
  }
  pre.details {
    font-size: 6pt;
  }
</style>