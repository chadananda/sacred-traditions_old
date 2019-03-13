<template>
  <div class="slider">
    <!-- topbar featured slider -->
    <div class="topbar-slider">
      <div id="slider-thumbnail" class="owl-carousel owl-theme slider-thumbnail">
        <div v-for="(ar, ind) in popularArticles" :key="ar.title" class="item">
         <g-image :src="images[ind]" :alt="ar.img.src" width="320" height="450" fit="inside" />
         <!-- <img :src="images[ind]" :alt="ar.img.src" /> -->
          <div class="item-caption">
            <div class="caption-description">
              <g-link :to="ar.path" class="caption-cat-links">{{ ar.title }}</g-link>
              <span class="caption-title">
                <g-link :to="ar.path" class="caption-title-link">{{ trimWords(ar.snip) }}</g-link>
                <g-link :to="ar.path" class="button caption-more-link">Read More</g-link>
              </span>
              <!-- .caption-title -->
            </div>
            <!-- .caption-description -->
          </div>
          <!-- .item-caption -->
        </div>
        <!-- .item -->
      </div>
      <!-- #slider-thumbnail -->
    </div>
    <!-- .topbar-slider -->
  </div>
</template>

<script>
import ImageWrapper from '~/components/ImageWrapper';
export default {
  data() {
    return {
      images: [
        '/assets/img/astrif-featured-slider-01.png',
        '/assets/img/astrif-featured-slider-02.png',
        '/assets/img/astrif-featured-slider-03.png',
        '/assets/img/astrif-featured-slider-04.png',
        '/assets/img/astrif-featured-slider-05.png',
        '/assets/img/astrif-featured-slider-06.png'
      ]
    }
  },
  components: { ImageWrapper },
  computed: {
    popularArticles() {
      // store should return list of articles, not nodes
      return this.$store.getters.getPopularArticles.slice(0, 6).map(ar => ar.node)
    }
  },
  methods: {
    // trims to desired length at word boundry
    trimWords: (src, chars=100) => {
      let words = src.split(' '), short = []
      words.map(w => { if (short.join(' ').length < chars) short.push(w) })
      return short.join(' ') + (short.length<words.length? '...' : '')
    }
  }
}
</script>
