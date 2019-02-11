<template>
  <nav class="navigation post-navigation" role="navigation">
    <h2 class="screen-reader-text">Post navigation</h2>
    <div class="nav-links">
      <div class="nav-previous">
        <a href="#" class="image-link">
          <ImageWrapper :src="`article_assets/2000px-Society_of_Our_Lady_of_the_Most_Holy_Trinity_badge.svg.png`" :alt="``" :width="90" :height="90"></ImageWrapper>
        </a>
        <span>Previous Post</span>
        <a href="#" class="prev-link" rel="prev">Essay on the Trinity</a>
      </div>
      <div class="nav-next">
        <a href="#" class="image-link">
          <ImageWrapper :src="`article_assets/Dalailama1_20121014_4639.jpg`" :alt="``" :width="90" :height="90"></ImageWrapper>
        </a>
        <span>Next Post</span>
        <a href="#" class="next-link" rel="next">Developing a Good Heart</a>
      </div>
    </div>
  </nav>
  <!-- .navigation -->
</template>

<script>
  import ImageWrapper from '~/components/ImageWrapper';
  export default {
    components: { ImageWrapper },
    name: "Navigation"
  };
</script>

<style scoped>
</style>