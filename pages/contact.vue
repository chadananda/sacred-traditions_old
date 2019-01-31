<template>
  <!-- content -->
  <Wrapper>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <Contact/>
      </div>
      <!-- .col-md-9 -->
    </div>
    <!-- .row -->
    <!-- #content -->
  </Wrapper>
</template>

<script>
import Wrapper from "~/components/wrapper/Wrapper.vue";
import Contact from "~/components/contact/Contact.vue";
export default {
  layout: "other",
  components: { Wrapper, Contact },
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
      ]
    };
  }
};
</script>