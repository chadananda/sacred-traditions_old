<template>
<div>
  <section class="promo">
     <div class="container">
        <div class="logo">
           <img :src="CDNUrl + 'pages/images/ocean_logo.svg'" />
           <div>Ocean 2.0 Reader
              <span>Interfaith Library</span>
           </div>
        </div>
     </div>
     <div class="promo-content container">
        <div class="wrapper-text">
           <h2>
              <span class="text-header">Read</span>
              <span class="text-header">Listen</span>
              <span class="text-header">Search</span>
           </h2>
           <div class="text-content">Ocean Reader is a custom ebook reader specialized for exploration of the world’s shared heritage of religious
              literature. It is intended to be used by students for exploring the literary treasures of the world’s scriptural
              traditions.
           </div>
           <div class="download-links">
              <a v-if="OS.android" class="download-button" :href="link">
                <img :src="CDNUrl + 'pages/images/icon_android_button.svg'" /> Get for
                <span> Android</span>
              </a>
              <a v-if="OS.ios" class="download-button" :href="link">
                <img :src="CDNUrl + 'pages/images/icon_ios_button.svg'" /> Get for
                <span> iOS</span>
              </a>
              <a v-if="OS.mac" class="download-button" :href="link">
                <img :src="CDNUrl + 'pages/images/icon_subtract_button.svg'" /> Get for
                <span> Mac</span>
              </a>
              <a v-if="OS.linux" class="download-button" :href="link">
                <img :src="CDNUrl + 'pages/images/icon_linux_button.svg'" /> Get for
                <span> Linux</span>
              </a>
              <a v-if="OS.windows" class="download-button" :href="link">
                <img :src="CDNUrl + 'pages/images/icon_windows_button.svg'" /> Get for
                <span> Windows</span>
              </a>
              <div class="links-images">
                 <a v-if="!OS.linux" :href="artifacts.linux"><img :src="CDNUrl + 'pages/images/icon_linux.svg'" alt=""></a>
                 <a v-if="!OS.android" :href="artifacts.android"><img :src="CDNUrl + 'pages/images/icon_android.svg'" alt=""></a>
                 <a v-if="!OS.mac" :href="artifacts.mac"><img :src="CDNUrl + 'pages/images/icon_subtract.svg'" alt=""></a>
                 <a v-if="!OS.windows" :href="artifacts.windows"><img :src="CDNUrl + 'pages/images/icon_windows.svg'" alt=""></a>
              </div>
           </div>
        </div>
        <div class="img-promo">
           <img :src="CDNUrl + 'pages/images/promo.png'" class="big-img"/>
           <img :src="CDNUrl + 'pages/images/promo_portret.png'" class="md-img"/>
           <img :src="CDNUrl + 'pages/images/promo_sm.png'" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="about">
     <div class="container">
        <h1>What is Ocean Reader</h1>
        <div class="about-content">
           <div class="icons-block">
              <div class="icons icon-read">
                 <img :src="CDNUrl + 'pages/images/icon_open_book.svg'" />
              </div>
              <h3>Read</h3>
              <span>The Ocean library contains a proofread collection of the world’s great religious classics.</span>

           </div>
           <div class="icons-block">
              <div class="icons icon-read">
                 <img :src="CDNUrl + 'pages/images/icon_headphones.svg'" />
              </div>
              <h3>Listen</h3>
              <span>Each book is word-aligned with an audio reading to provide an enjoyable “read-along” experience.</span>

           </div>
           <div class="icons-block">
              <div class="icons icon-read">
                 <img :src="CDNUrl + 'pages/images/icon_search.svg'" />
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
           <span>Every book has integrated audio so you can read, listen or both. Reading progress and position are mapped to
              your navigation bar and synced across all your devices.</span>
        </div>
        <div class="images-wrapper">
           <img :src="CDNUrl + 'pages/images/1.png'" class="big-img"/>
           <img :src="CDNUrl + 'pages/images/1_sm.png'" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Powerful Full-text Search</h2>
           <span>When online, Ocean can return search results from thousands of books, papers, articles and websites. When offline,
              you can still search, but only through non copyright-encumbered library books.</span>
        </div>
        <div class="images-wrapper">
           <img :src="CDNUrl + 'pages/images/2.png'"  class="big-img" />
           <img :src="CDNUrl + 'pages/images/2_sm.png'" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Organize Tags and Notes</h2>
           <span>Add your own notes, filter and organize notes for presentations or study. In the future you will be able to export
              and share your notes with others.
           </span>
        </div>
        <div class="images-wrapper">
           <img :src="CDNUrl + 'pages/images/3.png'"  class="big-img" />
           <img :src="CDNUrl + 'pages/images/3_sm.png'" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="content">
     <div class="container container-flex">
        <div class="wrapper-text">
           <h2>Build and Share Compilations</h2>
           <span>Extract quotes into subject compilations for later study. Read, listen or share.
           </span>
        </div>
        <div class="images-wrapper">
           <img :src="CDNUrl + 'pages/images/4.png'"  class="big-img" />
           <img :src="CDNUrl + 'pages/images/4_sm.png'" class="sm-img"/>
        </div>
     </div>
  </section>
  <section class="footer">
     Ocean 2.0 Reader
  </section>
</div>
</template>


<script>
export default {
  props: ['CDNUrl', 'artifacts'],
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
