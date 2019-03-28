<template>
  <div>
    <carousel id="carousel" v-if="isReady"
      :autoplay="true"
      :nav="false"
      :dots="false"
      :loop="true"
      :rewind="false"
      :items="5"
    >
      <div v-for="(ar, ind) in popularArticles" :key="ind" class="carousel-slide" width="320" >
        <g-link :to="ar.path">
          <img clss="slide-image" :src="images[ind]" :alt="ar.title" />
          <div class="slide-caption">{{ ar.title }}</div>
        </g-link>
      </div>
    </carousel>

  </div>
</template>

<script>
//import carousel from 'vue-owl-carousel'
const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;

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
      ],
      isReady: false
    }
  },
  components: { carousel },
  computed: {
    popularArticles() {
      // store should return list of articles, not nodes
      return this.$store.getters.getPopularArticles.slice(0, this.images.length-1).map(ar => ar.node)
    }
  },
  methods: {
    // trims to desired length at word boundry
    trimWords: (src, chars=100) => {
      let words = src.split(' '), short = []
      words.map(w => { if (short.join(' ').length < chars) short.push(w) })
      return short.join(' ') + (short.length<words.length? '...' : '')
    }
  },
  mounted() {
    if (process.browser) this.isReady = true
  },
}
</script>


<style scoped>
  #carousel {
    max-height: 450px !important;
    width: 100%;
    overflow: hidden;
  }

  .carousel-slide {
    position: relative;
    overflow: hidden;
    cursor: pointer !important;
    text-align: center;
    background: black !important;
  }
  .slide-caption {
    display: none;
    color: white;
    font-family: Oswald,sans-serif;
    font-size: 18px; line-height: 24px;
    padding: 3px; padding-left:5px; padding-right: 5px;
    font-weight: bold;
    position: absolute;
    top: 50%; left: 50%; transform: translate(-50%, -50%);
    text-transform: uppercase;
  }

  .carousel-slide:hover img {
    opacity: 0.5;
    transition: opacity .25s ease-in-out;
  }
  .carousel-slide:hover .slide-caption {display: inherit;}
  @media only screen and (max-width: 580px){
    .slide-caption {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 480px){
    .slide-caption {
      line-height: 16px;
    }
  }

  @media only screen and (max-width: 360px){
    .slide-caption {
      font-size: 12px;
    }
  }

</style>
