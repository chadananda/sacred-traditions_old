<template>
  <OtherLayout>
    <!-- content -->
    <b-row>
      <b-col cols="12" md="8" offset-md="2">
        <div class="site-entry">
          <article class="post format-standard hentry">
            <div class="entry-header">
              <h1 class="entry-title">Contact</h1>
            </div>
            <!-- .entry-header -->
            <div class="entry-content">
              <ul class="social-icon text-center">
                <li v-for="icon in social_icons" :key="icon.icon_name">
                  <g-link to="/#" :class="`icon-social icon-${icon.icon_name}`">
                    <i :class="`fa fa-${icon.icon_name}`"></i>
                  </g-link>
                </li>
              </ul>
              <!-- .social-icon -->
              <ContactForm/>
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
<style>
  .social-icon{
  margin-top: 30px;
  }
</style>
<script>
  import OtherLayout from '~/layouts/Other.vue'
  import ContactForm from '~/components/ContactForm.vue'

  export default {
    components: {
      OtherLayout,
      ContactForm
    },
    metaInfo: {
      title: 'Contact Us',
      meta: [
        { name: "description", content: "Sacred Traditions Interfaith Project -- contact page" }
      ]
    },
    data() {
      return {
        social_icons: [
          { icon_name: "facebook" },
          // { icon_name: "twitter" },
          // { icon_name: "instagram" },
          // { icon_name: "google-plus" },
          // { icon_name: "linkedin" },
          // { icon_name: "pinterest" },
          // { icon_name: "dribbble" },
          { icon_name: "youtube" }
        ]
      };
    }
  };
</script>
