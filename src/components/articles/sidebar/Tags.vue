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
  props: ['articles'],
  computed: {
    articleTags() {
      let tags = {}, total = 0
      this.articles.forEach(a => a.node.tags.split(',').forEach(tag => {
        if (tag in tags) tags[tag]++; else tags[tag] = 1
        total++
      }))
      Object.keys(tags).forEach(tag => {
        tags[tag] = Math.round(tags[tag]/total*100)
      })
      return tags
    }
  }
}
</script>

<style scoped>
</style>
