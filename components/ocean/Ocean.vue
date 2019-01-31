<template>
<div>
  <section class="promo">
     <div class="container">
        <div class="logo">
           <img src="/ocean_assets/images/ocean_logo.svg" />
           <div>Ocean 2.0 Interfaith Reader
              <span>Immersive Library of the World’s Sacred Literature</span>
           </div>
        </div>
     </div>
     <div class="promo-content container">
        <div class="wrapper-text">
           <h2>
              <span class="text-header">Read</span>
              <span class="text-header">Listen</span>
              <span class="text-header">Search</span>
              <span class="text-header">Share</span>
           </h2>
           <div class="text-content">Ocean is a custom ebook reader designed for exploration and study of the
              sacred literature of the world’s religious traditions. It provides a simple cross-platform reading
              experience with an immersive audio-integrated reading experience and usful study and research tools.
           </div>
           <div class="download-links">
              <a v-if="OS.android" class="download-button" :href="link">
                <img src="/ocean_assets/images/icon_android_button.svg" /> App for
                <span> Android</span>
              </a>
              <a v-if="OS.ios" class="download-button" :href="link">
                <img src="/ocean_assets/images/icon_ios_button.svg" /> App for
                <span> iOS</span>
              </a>
              <a v-if="OS.mac" class="download-button" :href="link">
                <img src="/ocean_assets/images/icon_subtract_button.svg" /> Installer for
                <span> Mac</span>
              </a>
              <a v-if="OS.linux" class="download-button" :href="link">
                <img src="/ocean_assets/images/icon_linux_button.svg" /> Installer for
                <span> Linux</span>
              </a>
              <a v-if="OS.windows" class="download-button" :href="link">
                <img src="/ocean_assets/images/icon_windows_button.svg" /> Installer for
                <span> Windows</span>
              </a>
              <div class="links-images">
                 <a v-if="!OS.linux" :href="artifacts.linux"><img src="/ocean_assets/images/icon_linux.svg" alt=""></a>
                 <a v-if="!OS.android" :href="artifacts.android"><img src="/ocean_assets/images/icon_android.svg" alt=""></a>
                 <a v-if="!OS.mac" :href="artifacts.mac"><img src="/ocean_assets/images/icon_subtract.svg" alt=""></a>
                 <a v-if="!OS.windows" :href="artifacts.windows"><img src="/ocean_assets/images/icon_windows.svg" alt=""></a>
                 <a v-if="!OS.ios" :href="artifacts.ios"><img src="/ocean_assets/images/icon_ios.svg" alt="" class="applelogo"></a>
              </div>
           </div>
        </div>
        <div class="img-promo">
           <img src="/ocean_assets/images/promo.png" class="big-img"/>
           <img src="/ocean_assets/images/promo_portret.png" class="md-img"/>
           <img src="/ocean_assets/images/promo_sm.png" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="about">
     <div class="container">
        <h1>What is Ocean Reader</h1>
        <div class="about-content">
           <div class="icons-block">
              <div class="icons icon-read">
                 <img src="/ocean_assets/images/icon_open_book.svg" />
              </div>
              <h3>Read</h3>
              <span>The Ocean library contains a vast collection of the world’s great religious classics.</span>

           </div>
           <div class="icons-block">
              <div class="icons icon-read">
                 <img src="/ocean_assets/images/icon_headphones.svg" />
              </div>
              <h3>Listen</h3>
              <span>Each book is word-aligned with an audio reading to provide an enjoyable “read-along” experience.</span>

           </div>
           <div class="icons-block">
              <div class="icons icon-read">
                 <img src="/ocean_assets/images/icon_search.svg" />
              </div>
              <h3>Search</h3>
              <span>Full text search across thousands of books, articles and website resources.</span>

           </div>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Read &amp; Listen</h2>
           <span>Alost every book has integrated audio so you can read, listen or both. Reading progress and position are mapped to
              your navigation bar and synced across all your devices.</span>
        </div>
        <div class="images-wrapper">
           <img src="/ocean_assets/images/1.png" class="big-img"/>
           <img src="/ocean_assets/images/1_sm.png" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Powerful Full-text Search</h2>
           <span>When online, Ocean can return search results from thousands of books, papers, articles and websites. When offline,
              you can still search, but only in non copyright-encumbered library books.</span>
        </div>
        <div class="images-wrapper">
           <img src="/ocean_assets/images/2.png"  class="big-img" />
           <img src="/ocean_assets/images/2_sm.png" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Organize Tags and Notes</h2>
           <span>Add your own notes, filter and organize notes for presentations or study. (Soon you will be able to export
              and share your notes with others.)
           </span>
        </div>
        <div class="images-wrapper">
           <img src="/ocean_assets/images/3.png"  class="big-img" />
           <img src="/ocean_assets/images/3_sm.png" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Build and Share Compilations</h2>
           <span>Extract quotes (with audio) into subject compilations for later study. Read, listen or share your compilations with anyone.
           </span>
        </div>
        <div class="images-wrapper">
           <img src="/ocean_assets/images/4.png"  class="big-img" />
           <img src="/ocean_assets/images/4_sm.png" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="footer">
     Ocean 2.0 Interfaith Reader
  </section>
</div>
</template>


<script>
export default {
  props: ['artifacts'],
  mounted: function () {
    var os = this.getOS();
    this.link = this.artifacts[os];
    this.$set(this.OS, os, true);
  },
  data: function () {
    return {
      link: '',
      OS: {}
    }
  },
  methods: {
    getOS: function () {
      var os = null;
      var exprs = {
        ios    : [/\biPad\b/, /\biPhone\b/, /\biPod\b/],
        android: [/\bAndroid\b/],
        windows: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/],
        mac    : [/\bMac OS\b/],
        linux  : [/\bLinux\b/]
      };

      Object.keys(exprs).every(function (key) {
        exprs[key].forEach(function (expr) {
          if (expr.test(window.navigator.userAgent)) {
            os = key;
          }
        });
        return !os;
      });

      return os
    }
  }
}
</script>

<style scoped>

  img.applelogo {
    width: 35px;
  }

  .container {
    padding: 0;
  }

  .download-button {
    white-space: nowrap;
  }

  .download-button img {
    top: 0;
    margin-top: -5px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.5em;
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    margin: 0;
  }
  .slider li {
    float: none;
  }
</style>
