<template>
  <section class="widget widget_recent_entries">
    <h2 class="widget-title">
      <span>Recent Posts</span>
    </h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="`/articles/${link.path}`">{{link.title}}</a>
        <span class="post-date">{{link.postdate}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          path: "2016-09-07-lorem-ipsum-dolor-sit-amet",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          postdate: "September 7, 2016"
        },
        {
          id: 2,
          path: "2016-08-14-on-enlightening-the-mind",
          title: "On Enlightening the Mind",
          postdate: "August 23, 2016"
        },
        {
          id: 3,
          path: "2016-08-02-be-like-adams-son",
          title: "Be Like Adam’s Son",
          postdate: "August 2, 2016"
        },
        {
          id: 4,
          path: "2016-03-11-essay-on-the-trinity",
          title: "Essay on the Trinity",
          postdate: "March 11, 2016"
        },
        {
          id: 5,
          path: "2016-03-11-developing-a-good-heart-by-dalai-lama",
          title: "Developing a Good Heart",
          postdate: "November 18, 2018"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>