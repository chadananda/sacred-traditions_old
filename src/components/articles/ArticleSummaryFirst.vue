<template>
  <article class="post first-post format-standard hentry">
    <div class="entry-featured-image">
      <ImageWrapper :src="article.img" :alt="`${article.title}`" :width="1200" :height="500"></ImageWrapper>
    </div>
    <div class="entry-area">
      <div class="entry-header">
        <h2 class="entry-title">
          <g-link :to="article.path" rel="bookmark">{{article.title}}</g-link>
        </h2>
        <div class="entry-meta">
          <span class="posted-on">
            <g-link :to="article.path" rel="bookmark">
              <time
                class="entry-date"
                :datetime="article.pubdate"
              >{{ new Date(article.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}</time>
            </g-link>
          </span>
          <span class="entry-cat">
            <span class="cat-link">
              <g-link :to="`/category/${article.category}`" rel="bookmark">{{article.category}}</g-link>
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
        <p>
          {{article.snip}}...
          <g-link :to="article.path" class="more-link">
            <span class="moretext">Read more</span>
            <span class="screen-reader-text">{{article.title}}</span>
          </g-link>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  import ImageWrapper from '~/components/ImageWrapper'
  export default {
    components: { ImageWrapper },
    props: ["article", "type"]
  };
</script>
