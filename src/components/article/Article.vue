<template>
    <article class="post format-standard hentry">
        <Header/>
        <slot/>
        <Footer/>
    </article>
</template>

<script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";

  export default {
    components: {
      Header,
      Footer
    }
  };
</script>
