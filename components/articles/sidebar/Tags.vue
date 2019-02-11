<template>
  <section class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>Tags</span>
    </h2>

    <div class="tagcloud">
      <a href="#" v-for="(weight, tag) in articleTags" :key="tag">
        {{tag}}
        <span>{{weight}}</span>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  computed: {
    articleTags() {
      return this.$store.getters['articles/getTagList']
    }
  }
}
</script>

<style scoped>
</style>