<template>
  <section class="widget widget_categories">
    <h2 class="widget-title">
      <span>Categories</span>
    </h2>
    <ul v-for="link in links" :key="link.id">
      <li>
        <a :href="link.path">{{link.content}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, path: "category.html", content: "Bramachari" },
        { id: 2, path: "category.html", content: "adipiscing" },
        { id: 3, path: "category.html", content: "enlightening" },
        { id: 4, path: "category.html", content: "disputes" },
        { id: 5, path: "category.html", content: "trinity" },
        { id: 6, path: "category.html", content: "heart" }
      ]
    };
  }
};
</script>

<style scoped>
</style>