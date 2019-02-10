<template>
  <section class="widget astrif_widget_popular_entries">
    <h2 class="widget-title">
      <span>Most Popular Articles</span>
    </h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <nuxt-link v-if="`${link.permalink}`" :to="`${link.permalink}`" class="popular-entry-thumbnail">
          <ImageWrapper :src="`${link.img}`" :alt="`${link.title}`" :width="130" :height="130"></ImageWrapper>
        </nuxt-link>
        <span class="popular-entry-title">
          <nuxt-link
            :to="`${link.permalink}`"
            rel="bookmark"
            class="popular-entry-title-link"
          >{{link.title}}</nuxt-link>
          <div class="entry-meta">
          <span class="posted-on">
            <time class="entry-date" :datetime="link.pubdate">
              {{ new Date(link.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}
            </time>
          </span>
          <span class="entry-like">
            <nuxt-link to="/#">
              <i class="fa fa-heart-o"></i>
              {{ link.likes }}
            </nuxt-link>
          </span>
             </div>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  import ImageWrapper from '~/components/images/ImageWrapper';

  export default {
    props: ['articles'],
    components: { ImageWrapper },
    computed: {
      links() {
        return this.$store.getters['articles/getArticles'].slice().sort((a,b) => b.likes-a.likes ).slice(0, 5) // 5 most popular(descending)
      }
    },



  }
</script>

<style scoped>
</style>