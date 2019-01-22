<template>
  <section class="widget astrif_widget_popular_entries">
    <h2 class="widget-title">
      <span>Popular Posts (again)</span>
    </h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="`/articles/${link.path}`" class="popular-entry-thumbnail">
          <ImageWrapper :src="`${link.imagepath}`" :alt="`${link.alt}`" :width="130" :height="130"></ImageWrapper>
          <!--<img :src="link.imagepath" :alt="link.alt">-->
        </a>
        <span class="popular-entry-title">
          <a
            :href="`/articles/${link.spanhref}`"
            rel="bookmark"
            class="popular-entry-title-link"
          >{{link.spancontent}}</a>
          <span class="popular-entry-date">{{link.entrydate}}</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  import ImageWrapper from '~/components/images/ImageWrapper'
export default {
  components: { ImageWrapper },
  data() {
    return {
      links: [
        {
          id: 1,
          path: "2016-09-07-lorem-ipsum-dolor-sit-amet",
          imagepath: "article_assets/spirituality-4.jpg",
          alt: "popular post1",
          spanhref: "2016-09-07-lorem-ipsum-dolor-sit-amet",
          spancontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          entrydate: "September 7, 2016"
        },
        {
          id: 2,
          path: "2016-08-14-on-enlightening-the-mind",
          imagepath: "article_assets/What-if-Artificial-Intelligence-Was-Enlightened-1038x583.jpg",
          alt: "popular post2",
          spanhref: "2016-08-14-on-enlightening-the-mind",
          spancontent: "On Enlightening the Mind",
          entrydate: "August 23, 2016"
        },
        {
          id: 3,
          path: "2016-08-02-be-like-adams-son",
          imagepath: "article_assets/adam-and-eve-with-the-infants-cain-and-abel-lorenzo-de-ferrari.jpg",
          alt: "popular post3",
          spanhref: "2016-08-02-be-like-adams-son",
          spancontent: "Be Like Adam’s Son",
          entrydate: "August 2, 2016"
        },
        {
          id: 4,
          path: "2016-03-11-essay-on-the-trinity",
          imagepath: "article_assets/2000px-Society_of_Our_Lady_of_the_Most_Holy_Trinity_badge.svg.png",
          alt: "popular post4",
          spanhref: "2016-03-11-essay-on-the-trinity",
          spancontent: "Essay on the Trinity",
          entrydate: "March 11, 2016"
        },
        {
          id: 5,
          path: "2016-03-11-developing-a-good-heart-by-dalai-lama",
          imagepath: "article_assets/Dalailama1_20121014_4639.jpg",
          alt: "popular post5",
          spanhref: "2016-03-11-developing-a-good-heart-by-dalai-lama",
          spancontent: "Developing a Good Heart",
          entrydate: "November 18, 2018"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>