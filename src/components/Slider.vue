<template>
  <div class="slider">
    <!-- topbar featured slider -->
    <div class="topbar-slider">
      <div id="slider-thumbnail" class="owl-carousel owl-theme slider-thumbnail">
        <div v-for="slide in slides" :key="slide.title" class="item">
          <img :src="slide.image" :alt="slide.alt">
          <div class="item-caption">
            <div class="caption-description">
              <a href="/#" class="caption-cat-links">{{ slide.description }}</a>
              <span class="caption-title">
                <a href="/#" class="caption-title-link">{{ slide.description}}</a>
                <a href="/#" class="button caption-more-link">Read More</a>
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
export default {
  data() {
    return {
      slides: [
        {
          title: "article1",
          path: "2016-10-26-thomas-merton-memoirs-about-interfaith",
          image: require("../../static/assets/img/astrif-featured-slider-01.png"),
          alt: "featured slider 01",
          description: "Thomas Merton Memoirs about Interfaith"
        },
        {
          title: "article2",
          path: "2016-09-07-lorem-ipsum-dolor-sit-amet",
          image: require("../../static/assets/img/astrif-featured-slider-02.png"),
          alt: "featured slider 02",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          title: "article3",
          path: "2016-08-14-on-enlightening-the-mind",
          image: require("../../static/assets/img/astrif-featured-slider-03.png"),
          alt: "featured slider 03",
          description: "On Enlightening the Mind"
        },
        {
          title: "article4",
          path: "2016-08-02-be-like-adams-son",
          image: require("../../static/assets/img/astrif-featured-slider-04.png"),
          alt: "featured slider 04",
          description: "Be Like Adam’s Son"
        },
        {
          title: "article5",
          path: "2016-03-11-essay-on-the-trinity",
          image: require("../../static/assets/img/astrif-featured-slider-05.png"),
          alt: "featured slider 05",
          description: "Essay on the Trinity"
        },
        {
          title: "article6",
          path: "2016-03-11-developing-a-good-heart-by-dalai-lama",
          image: require("../../static/assets/img/astrif-featured-slider-06.png"),
          alt: "featured slider 06",
          description: "Developing a Good Heart"
        }
      ]
    };
  }
};
</script>
