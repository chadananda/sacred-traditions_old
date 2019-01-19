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
        <div class="instagram-title">
          <h3>insta
            <i class="fa fa-instagram"></i> gram
          </h3>
          <span class="instagram-subtitle">Follow our Projects</span>
        </div>
        <div class="instagram-widget">
          <ul>
            <li>
              <a href>
                <img src="/img/article_assets/Dhirendra-Brahmachari.jpeg" alt>
              </a>
            </li>
            <li>
              <a href>
                <img src="/img/article_assets/spirituality-4.jpg" alt>
              </a>
            </li>
            <li>
              <a href>
                <img src="/img/article_assets/What-if-Artificial-Intelligence-Was-Enlightened-1038x583.jpg" alt>
              </a>
            </li>
            <li>
              <a href>
                <img src="/img/article_assets/adam-and-eve-with-the-infants-cain-and-abel-lorenzo-de-ferrari.jpg" alt>
              </a>
            </li>
            <li>
              <a href>
                <img src="/img/article_assets/2000px-Society_of_Our_Lady_of_the_Most_Holy_Trinity_badge.svg.png" alt>
              </a>
            </li>
            <li>
              <a href>
                <img src="/img/article_assets/Dalailama1_20121014_4639.jpg" alt>
              </a>
            </li>
          </ul>
          <!--<FooterImages :footer_images="images"/>-->
          <p class="instagram-follow">
            <a
              href="http://instagram.com/sacredtraditions"
              target="_blank"
              class="btn btn-default"
            >@sacredtraditions</a>
          </p>
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
  export default {
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