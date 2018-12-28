<template>
  <div id="content" class="site-content">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import Footer from "~/components/footer/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>
