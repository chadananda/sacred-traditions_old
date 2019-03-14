<template>
  <div class="slider">
    <!-- topbar featured slider -->
    <div class="topbar-slider">
      <div id="slider-thumbnail" class="owl-carousel owl-theme slider-thumbnail">
        <div v-for="(ar, ind) in popularArticles" :key="ar.title" class="item">
         <img :src="images[ind]" :alt="ar.img.src" width="320" height="450" />
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
import ImageWrapper from '~/components/ImageWrapper'
import $ from 'jquery'

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
  },
  mounted(){
    // here is where we should trigger visibility
    // this.$el.
   // var b = $("#site-navigation"), c = $(b).outerHeight();
   // $(".site-navigation-sticky-wrapper").css("height", c);
   // var d, e = $("body").hasClass("home");
   // d = e ? $(".topbar-slider").outerHeight() + $(".site-branding").outerHeight() : $(".site-branding").outerHeight(),

    // $(window).scroll(function() {
    //   $(window).scrollTop() > d ? $(b).addClass("sticky-bar") : $(b).removeClass("sticky-bar")
    // }),
    // $(window).scrollTop() > d && $(b).addClass("sticky-bar")


    // var f = $(".slider-thumbnail")[0]
    // console.log('hello world', f)


    // var f = $(".slider-thumbnail")
   // f.imagesLoaded(function() {
      // f.owlCarousel({
      //   autoPlay: 3e3,
      //   slideSpeed: 600,
      //   stopOnHover: !0,
      //   items: 4,
      //   itemsDesktop: [1199, 4],
      //   itemsDesktopSmall: [979, 3],
      //   itemsTablet: [600, 2],
      //   itemsMobile: [479, 1],
      //   navigation: !0,
      //   navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      // })
  //  });
    // var g = $(".container-masonry");
    // g.imagesLoaded(function() {
    //     g.masonry()
    // })


  }
}
</script>
