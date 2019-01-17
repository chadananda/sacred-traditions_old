<template>
  <div class="recentArticles">
    <template v-for="(article, index) in articles">
      <ArticleSummaryFirst v-if="index===0" :article="article" :key="index"/>
      <ArticleSummary v-else :article="article" :key="index"/>
    </template>
  </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
// import ArticleSidebar from "~/components/articles/ArticleSidebar"

export default {
  props: ["listStyle", "articleCount"],
  components: { ArticleSummary, ArticleSummaryFirst },
  data() {
    return {
      articles: [
        {
          path: "2016-08-14-an-indian-folk-religion",
          img: "astrif-post-entry-01.jpg",
          title: "An Indian Folk Religion",
          pubdate: "2016-08-14",
          category: "breakfast",
          likes: 172,
          snip:
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
        },
        {
          path: "2016-10-26-thomas-merton-memoirs-about-interfaith",
          img: "astrif-post-entry-02.jpg",
          title: "Thomas Merton Memoirs about Interfaith",
          pubdate: "2016-10-27",
          category: "Interfaith",
          likes: 320,
          snip:
            "I become very fond of Bramachari, and he of me. We got along very well together, especially since he sensed that I was trying to feel my way into a settled religious conviction, and into some kind of a life that was centered, as his was, on God."
        },
        {
          path: "2016-09-07-lorem-ipsum-dolor-sit-amet",
          img: "astrif-post-entry-03.jpg",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          pubdate: "2016-09-07",
          category: "breakfast",
          likes: 42,
          snip:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ligula est. Duis nec tellus tellus. Nulla dignissim dui ac ante iaculis, ut pellentesque enim consectetur. Pellentesque convallis sollicitudin ipsum, eu ultrices justo aliquam quis."
        },
        {
          path: "2016-08-14-on-enlightening-the-mind",
          img: "astrif-post-entry-04.jpg",
          title: "On Enlightening the Mind",
          pubdate: "2016-08-14",
          category: "breakfast",
          likes: 5,
          snip:
            "THE terms intellectual improvement, or enlightening the mind, cultivation, and civilization [Aufklärung, Kultur, Bildung], are as yet scarcely naturalized in the German language."
        },
        {
          path: "2016-08-02-be-like-adams-son",
          img: "astrif-post-entry-05.jpg",
          title: "Be Like Adam’s Son",
          pubdate: "2016-08-02",
          category: "breakfast",
          likes: 36,
          snip:
            "I take up here an approach to the main dilemma of human life on this planet; I tackle this issue in the light of the story of Adam's two sons, as related by God in His Scripture, the Qur'an (5:27-31)."
        },
        {
          path: "2016-03-11-essay-on-the-trinity",
          img: "astrif-post-entry-06.jpg",
          title: "Essay on the Trinity",
          pubdate: "2016-03-11",
          category: "breakfast",
          likes: 99,
          snip:
            "IT IS COMMON when speaking of the Divine happiness to say that God is infinitely happy in the enjoyment of Himself, in perfectly beholding and infinitely loving, and rejoicing in, His own essence and perfection."
        },
        {
          path: "2016-03-11-developing-a-good-heart-by-dalai-lama",
          img: "astrif-post-entry-07.jpg",
          title: "Developing a Good Heart",
          pubdate: "2018-11-18",
          category: "breakfast",
          likes: 87,
          snip:
            "I always tell people that my religion is kindness, because kindness is “in our bones.” Without kindness, none of us could survive. When we are born we are welcomed with kindness and compassion."
        }
      ]
    };
  }
};
</script>
