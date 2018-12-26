<template><div>

  <h3> &nbsp; Articles: </h3>
  <ul>
   <li v-for="(ar, id) in articles" :key="id">
     <h3><nuxt-link :to="ar.permalink">{{ar.title}}</nuxt-link></h3>
     <pre>{{ar}}</pre>
    </li>
  </ul>

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