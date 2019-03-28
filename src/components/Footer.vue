<template>
  <div class="footer">
    <!-- site-footer -->
    <footer id="colophon" class="site-footer" role="contentinfo">
      <!-- footer subscribe -->
      <div class="footer-subscribe">
        <b-container>
          <b-row>
            <b-col cols="12" md="6" sm="8" offset-md="3" offset-sm="2">

              <!-- <div v-if="!$store.state.user">
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
              </form> -->


              <!-- .form-inline -->
            </b-col>
            <!-- .col-## -->
          </b-row>
          <!-- .row -->
        </b-container>
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
            <li v-for="(edge, index) in getFooterArticle" :key='index'>
              <g-link :to="edge.node.path">
                <ImageWrapper :src="edge.node.img" :alt="edge.node.title" :width="300" :height="300"></ImageWrapper>
              </g-link>
            </li>
          </ul>
          <!-- <p class="instagram-follow">
            <a
              href="http://instagram.com/sacredtraditions"
              target="_blank"
              class="btn btn-default">@sacredtraditions</a>
          </p> -->
        </div>
      </div>

      <!-- .footer-instagram -->
    </footer>
    <!-- #site-footer -->
    <!-- copyright -->
    <section id="copyright" class="copyright">
      <b-container>
        <b-row>
          <b-col cols="12">Copyright &copy; 2019. All Right Reserved.

            &mdash; <g-link to="/">https://sacred-traditions.org</g-link>
          </b-col>
          <!-- .col-sm-6 -->
        </b-row>
        <!-- .row -->
      </b-container>
      <!-- .container -->
    </section>
    <!-- #copyright -->
  </div>
</template>




<script>
  import ImageWrapper from '~/components/ImageWrapper'

  export default {
    props: ['articles'],
    components: { ImageWrapper },
    computed: {
      getFooterArticle() {
        return this.$store.getters.getArticles.slice(0, 6)
      }
    }
  }
</script>

<style scoped>
  .instagram-follow {
    left: 49%!important;
  }
</style>
