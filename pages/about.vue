<template>
  <!-- content -->
    <div class="row">
      <!-- article -->
      <div class="col-md-8 col-md-offset-2">


 <div class="site-entry">
    <article class="post format-standard hentry">
      <div class="entry-header">
        <h1 class="entry-title">About Us</h1>
      </div>
      <!-- .entry-header -->
      <div class="entry-content">
        <!-- <img class="img-responsive aligncenter" src="~/assets/img/astrif-about-me.jpg"> -->
        <p class="text-center">
          We are a group of friends of various religious traditions interested in sharing experiences
          related to the most important part of our religion -- our book. Religion have many varied aspects but
          the part that we share is the fact that our sacred experience is about a book -- about words.
        </p> <p class="text-center">
          And not just any words but words which speak to us from a higher reality. Words which change us and
          make us something more, something better. It is the idea that God speaks and that mankind is enobled
          through the study of God's word.
        </p> <p class="text-center">
          In this modern era, the world's religious traditions are no longer isolated and owned by one continent or
          culture. Rather, the world's great religious literature represents a common heritage of the entire
          human race. The challenge is to find in them threads of eternal truth which bind us all together in
          a wider story.
        </p>
        <IconsWrapper :icons="this.$store.getters['links/getSocialLinks']" iconClass="text-center"/>
        <!-- .social-icon -->
      </div>
      <!-- .entry-content -->
    </article>
    <!-- .post -->
  </div>



      </div>
      <!-- .col-md-9 -->
    </div>
    <!-- .row -->
    <!-- #content -->
</template>

<script>
import IconsWrapper from "~/components/IconsWrapper.vue"

// import About from "~/components/about/About.vue";
export default {
  layout: "other",
  components: { IconsWrapper },

  head() {
    return {
      title: 'About Sacred-Traditions.org',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Sacred Traditions Interfaith Project"
        }
      ],
    };
  }
};
</script>