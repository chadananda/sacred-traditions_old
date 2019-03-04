<template>
  <section class="widget widget_categories">
    <h2 class="widget-title">
      <span>Categories</span>
    </h2>
    <ul v-for="(cat, index) in $store.getters.getCategoryList" :key="index">
      <li>
        <g-link :to="`/categories/${cat}`">{{cat}}</g-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['articles']
};
</script>

<style scoped>
</style>
