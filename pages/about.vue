<template>
  <!-- content -->
  <Wrapper>
    <div class="row">
      <!-- article -->
      <div class="col-md-8 col-md-offset-2">
        <About/>
      </div>
      <!-- .col-md-9 -->
    </div>
    <!-- .row -->
    <!-- #content -->
  </Wrapper>
</template>

<script>
import Wrapper from "~/components/wrapper/Wrapper.vue";
import About from "~/components/about/About.vue";
export default {
  layout: "other",
  components: { Wrapper, About },

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
      ]
    };
  }
};
</script>