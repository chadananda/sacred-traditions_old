<template>
  <div class="footer">
    <!-- site-footer -->
    <footer id="colophon" class="site-footer" role="contentinfo">
      <!-- footer subscribe -->
      <div class="footer-subscribe">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div v-if="!$store.state.user">
                <button class="btn btn-default" @click="googleSignUp">Google Sign In</button>
              </div>
              <div v-else>
                <h2>Firebase Auth Success</h2>
              </div>
              <h3 class="subscribe-title">Subscribe</h3>
              <p>Subscribe to get periodic email notifications of events and projects.</p>
              <form class="form-inline">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your email address">
                </div>
                <button type="submit" class="btn btn-default">Sign up</button>
              </form>
              <!-- .form-inline -->
            </div>
            <!-- .col-## -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </div>
      <!-- .footer-subscribe -->
      <!-- footer instagram -->

      <div class="footer-instagram">
        <!-- <div class="instagram-title">
          <h3>insta
            <i class="fa fa-instagram"></i> gram
          </h3>
          <span class="instagram-subtitle">Follow our Projects</span>
        </div> -->
        <br><br>

        <div class="instagram-widget">
          <ul>
            <li v-for="(article, index) in getArticles" :key='index'>
              <nuxt-link :to="article.permalink">
                <ImageWrapper :src="article.img" :alt="article.title" :width="300" :height="300"></ImageWrapper>
              </nuxt-link>
            </li>
          </ul>
          <!-- <p class="instagram-follow">
            <a
              href="http://instagram.com/sacredtraditions"
              target="_blank"
              class="btn btn-default"
            >@sacredtraditions</a>
          </p> -->
        </div>
      </div>

      <!-- .footer-instagram -->
    </footer>
    <!-- #site-footer -->
    <!-- copyright -->
    <section id="copyright" class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">Copyright &copy; 2019. All Right Reserved.</div>
          <!-- .col-sm-6 -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </section>
    <!-- #copyright -->
  </div>
</template>
<script>
  import ImageWrapper from '~/components/images/ImageWrapper'
  export default {
    components: { ImageWrapper },
    computed: {
      getArticles() {
        const articles = this.$store.getters.getArticles;
        return articles.slice(0, 6);
      }
    },
    methods: {
        googleSignUp() {
          this.$store.dispatch('signInWithGoogle').then(() => {
            console.log('Google Sign In');
          }).catch((e) => {
            console.log(e.message);
          })
        }
    }
  }
</script>

<style scoped>
  .instagram-follow {
    left: 49%!important;
  }
</style>