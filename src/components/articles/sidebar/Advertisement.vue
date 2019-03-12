<template>
  <section class="widget widget_text">
    <h2 class="widget-title">
      <span>Fresh: Ocean 2.0 Reader</span>
    </h2>
    <div class="textwidget">
      <g-link :to="url">
        <g-image :src="image" alt="No image"></g-image>
      </g-link>
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
