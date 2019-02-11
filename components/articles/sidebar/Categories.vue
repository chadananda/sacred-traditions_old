<template>
  <section class="widget widget_categories">
    <h2 class="widget-title">
      <span>Categories</span>
    </h2>
    <ul v-for="cat in articleCats" :key="cat">
      <li>
        <nuxt-link :to="`/categories/${cat}`">{{cat}}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    articleCats() {
      return this.$store.getters['articles/getCategoryList']
    }
  }
};
</script>

<style scoped>
</style>
