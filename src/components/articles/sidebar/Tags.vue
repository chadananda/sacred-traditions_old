<template>
  <section class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>Tags</span>
    </h2>

    <div class="tagcloud">
      <a href="#" v-for="(weight, tag, index) in $store.getters.getTagList" :key="index">
        {{tag}}
        <span>{{weight}}</span>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style scoped>
</style>
