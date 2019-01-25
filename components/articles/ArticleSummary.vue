<template>
  <article class="post format-standard hentry">
    <div class="entry-featured-image">
      <ImageWrapper :src="`${article.img}`" :alt="`${article.title}`" :width="300" :height="300"></ImageWrapper>
    </div>
    <div class="entry-area">
      <div class="entry-header">
        <h2 class="entry-title">
          <nuxt-link :to="ar_link" rel="bookmark">{{article.title}}</nuxt-link>
        </h2>
        <div class="entry-meta">
          <span class="posted-on">
            <nuxt-link :to="ar_link" rel="bookmark">
              <time
                class="entry-date"
                :datetime="article.pubdate"
              >{{ new Date(article.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}</time>
            </nuxt-link>
          </span>
          <span class="entry-cat">
            <span class="cat-link">
              <nuxt-link :to="`/category/${article.category}`">{{article.category}}</nuxt-link>
            </span>
          </span>
          <span class="entry-like">
            <a href>
              <i class="fa fa-heart-o"></i>
              {{article.likes}}
            </a>
          </span>
        </div>
      </div>
      <div class="entry-content">
        <p class="text-center">
          {{article.snip}}...
          <nuxt-link :to="ar_link" class="more-link">
            <span class="moretext">Read more</span>
            <span class="screen-reader-text">{{article.title}}</span>
          </nuxt-link>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  import ImageWrapper from '~/components/images/ImageWrapper'
  export default {
    components: { ImageWrapper },
    props: ["article", "type"],
    data: function () {
      return {
        ar_link: this.article.permalink ? this.article.permalink : `/articles/${this.article.path}`
      }
    }
  };
</script>
