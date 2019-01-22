<template>
  <article class="post first-post format-standard hentry">
    <div class="entry-featured-image">
      <ImageWrapper :src="`${article.img}`" :alt="`${article.title}`" :width="1200" :height="500"></ImageWrapper>
      <!--<img :src="`/img/${article.img}`" :alt="article.title">-->
    </div>
    <div class="entry-area">
      <div class="entry-header">
        <h2 class="entry-title">
          <a
            :href="type === 'articles' ? article.permalink : `/articles/${article.path}`"
            rel="bookmark"
          >{{article.title}}</a>
        </h2>
        <div class="entry-meta">
          <span class="posted-on">
            <a
              :href="type === 'articles' ? article.permalink : `/articles/${article.path}`"
              rel="bookmark"
            >
              <time
                class="entry-date"
                :datetime="article.pubdate"
              >{{ new Date(article.pubdate).toLocaleDateString("en-US", {year:'numeric',month:'short',day:'numeric'}) }}</time>
            </a>
          </span>
          <span class="entry-cat">
            <span class="cat-link">
              <a :href="`/category/${article.category}`">{{article.category}}</a>
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
          <a
            :href="type === 'articles' ? article.permalink : `/articles/${article.path}`"
            class="more-link"
          >
            <span class="moretext">Read more</span>
            <span class="screen-reader-text">{{article.title}}</span>
          </a>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  import ImageWrapper from '~/components/images/ImageWrapper'
  export default {
    components: { ImageWrapper },
    props: ["article", "type"]
  };
</script>