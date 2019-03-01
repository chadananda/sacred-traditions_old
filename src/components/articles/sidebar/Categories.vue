<template>
  <section class="widget widget_categories">
    <h2 class="widget-title">
      <span>Categories</span>
    </h2>
    <ul v-for="(edge, index) in articles" :key="index">
      <li>
        <g-link :to="`/categories/${edge.node.category}`">{{edge.node.category}}</g-link>
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
