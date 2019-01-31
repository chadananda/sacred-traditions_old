<template>
  <div class="site-entry">
    <article class="post format-standard hentry">
      <div class="entry-header">
        <h1 class="entry-title">About Us</h1>
      </div>
      <!-- .entry-header -->
      <div class="entry-content">
        <!-- <img class="img-responsive aligncenter" src="~/assets/img/astrif-about-me.jpg"> -->
        <p class="text-center">
          Hello. We are a group of friends of various religious traditions interested in sharing experiences
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
        <IconsWrapper :icons="s_icons" iconClass="text-center"/>
        <!-- .social-icon -->
      </div>
      <!-- .entry-content -->
    </article>
    <!-- .post -->
  </div>
  <!-- .site-entry -->
</template>

<script>
import IconsWrapper from "~/components/icons/IconsWrapper.vue";
export default {
  components: { IconsWrapper },
  data: function() {
    return {
      s_icons: [
        { href: "", icon: "facebook" },
        { href: "", icon: "twitter" },
        { href: "", icon: "instagram" },
        { href: "", icon: "google-plus" },
        { href: "", icon: "linkedin" },
        { href: "", icon: "pinterest" },
        { href: "", icon: "dribbble" },
        { href: "", icon: "youtube" }
      ]
    };
  }
};
</script>
