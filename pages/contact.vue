<template>
  <!-- content -->
    <div class="row">
      <div class="col-md-8 col-md-offset-2">


    <div class="site-entry">
        <article class="post format-standard hentry">
          <div class="entry-header">
            <h1 class="entry-title">Contact</h1>
          </div>
          <!-- .entry-header -->
          <div class="entry-content">
            <ul class="social-icon text-center">
              <li v-for="icon in social_icons" :key="icon.icon_name">
                <nuxt-link to="#" :class="`icon-social icon-${icon.icon_name}`">
                  <i :class="`fa fa-${icon.icon_name}`"></i>
                </nuxt-link>
              </li>
            </ul>
            <!-- .social-icon -->
            <ContactForm/>
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
// import ContentWrapper from "~/components/ContentWrapper.vue"
import ContactForm from "~/components/forms/ContactForm"

export default {
  layout: "other",
  components: { ContactForm },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Sacred Traditions Interfaith Project -- contact page"
        }
      ],
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