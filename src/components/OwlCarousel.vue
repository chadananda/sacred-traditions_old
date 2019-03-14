<template>
  <div>

<carousel id="carousel"
  :autoplay="true"
  :nav="false"
  :dots="false"
  :loop="true"
  :rewind="false"
  :items="5"
>
    <div v-for="(ar, ind) in popularArticles" :key="ind" class="carousel-slide" width="320" >
      <g-link :to="ar.path"><img :src="images[ind]" :alt="ar.img.src" /></g-link>

      <div class="slide-caption">
        <g-link :to="ar.path" class="slide-caption-link">{{ ar.title }}</g-link>
        <br><br>
        <g-link :to="ar.path" class="button slide-caption-link">Read More</g-link>
      </div>
    </div>
</carousel>

  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

// import $ from 'jquery'

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
  }
}
</script>



<style>
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
  }

  .slide-caption {
    display: none;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  }
  .carousel-slide:hover .slide-caption {display: inherit;}

  a.slide-caption-link {
    color: white;
    font-size: 110%; line-height: 1.6em;
    background-color: rgb(0,0,0,.5);
    padding: 3px; padding-left:5px; padding-right: 5px;
    font-weight: bold;
  }

</style>
