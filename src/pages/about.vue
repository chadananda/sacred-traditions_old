<template>
  <OtherLayout>
    <!-- content -->
    <b-row>
      <!-- article -->
      <b-col cols="12" md="8" offset-md="2">
        <div class="site-entry">
          <article class="post format-standard hentry">
            <div class="entry-header">
              <h1 class="entry-title">About Us</h1>
            </div>
            <!-- .entry-header -->
            <div class="entry-content">
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
               <IconsWrapper :icons="social_links" iconClass="text-center"/>
              <!-- .social-icon -->
            </div>
            <!-- .entry-content -->
          </article>
        <!-- .post -->
        </div>



      </b-col>
      <!-- .col-md-9 -->
    </b-row>
    <!-- .row -->
    <!-- #content -->
  </OtherLayout>
</template>

<script>
  import IconsWrapper from "~/components/IconsWrapper.vue"
  import OtherLayout from '~/layouts/Other.vue'
  export default {
    components: {
      OtherLayout,
      IconsWrapper
    },
    metaInfo: {
      title: 'About Sacred-Traditions.org',
      meta: [
        { name: "description", content: "Sacred Traditions Interfaith Project -- about page" }
      ],
    },
    data() {
      return {
        social_links: [
          // { id: 1, icon: "twitter" },
          { id: 2, icon: "facebook", url:"https://www.facebook.com/The-Dawn-Breakers-Challenge-329820570524376/" },
          // { id: 3, icon: "instagram" },
          // { id: 4, icon: "pinterest" },
          { id: 5, icon: "youtube", url:"" }
        ]
      }
    }
  };
</script>
