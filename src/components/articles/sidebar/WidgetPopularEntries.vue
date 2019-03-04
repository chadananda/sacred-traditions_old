<template>
  <section class="widget astrif_widget_popular_entries">
    <h2 class="widget-title">
      <span>Most Popular Articles</span>
    </h2>
    <ul>
      <li v-for="(edge, index) in popularArticles" :key="index">
        <g-link v-if="`${edge.node.path}`" :to="`${edge.node.path}`" class="popular-entry-thumbnail">
          <ImageWrapper :src="`${edge.node.img}`" :alt="`${edge.node.title}`" :width="130" :height="130"></ImageWrapper>
        </g-link>
        <span class="popular-entry-title">
          <g-link
            :to="`${edge.node.path}`"
            rel="bookmark"
            class="popular-entry-title-link"
          >{{edge.node.title}}</g-link>
          <div class="entry-meta">
          <span class="posted-on">
            <time class="entry-date" :datetime="edge.node.pubdate">
              {{ new Date(edge.node.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}
            </time>
          </span>
          <span class="entry-like">
            <g-link to="/#">
              <i class="fa fa-heart-o"></i>
              {{ edge.node.likes }}
            </g-link>
          </span>
             </div>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  import ImageWrapper from '~/components/ImageWrapper';

  export default {
    props: ['articles'],
    components: { ImageWrapper },
    computed: {
      popularArticles() {
        return this.$store.getters.getPopularArticles.slice(0, 5) // 5 most popular
      }
    }
  }
</script>

<style scoped>
</style>
