<template>
  <section class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>Tags</span>
    </h2>
    <div class="tagcloud">
      <a href="#" v-for="link in links" :key="link.id">
        {{link.content}}
        <span>{{link.spanvalue}}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, content: "buddhism", spanvalue: "52" },
        { id: 2, content: "Bramachari", spanvalue: "86" },
        { id: 3, content: "adipiscing", spanvalue: "13" },
        { id: 4, content: "enlightening", spanvalue: "7" },
        { id: 5, content: "disputes", spanvalue: "64" },
        { id: 6, content: "trinity", spanvalue: "9" },
        { id: 7, content: "heart", spanvalue: "29" }
      ]
    };
  }
};
</script>

<style scoped>
</style>