<template>
  <OtherLayout>
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
      </div>
      <!-- .col-md-9 -->
    </div>
    <!-- .row -->
    <!-- #content -->
  </OtherLayout>
</template>

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
