<template>
  <section class="widget widget_text">
    <h2 class="widget-title">
      <span>Fresh: Ocean 2.0 Reader</span>
    </h2>
    <div class="textwidget">
      <a :href="url">
        <img :src="image" alt="">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["url", "image"]
};
</script>

<style scoped>
</style>