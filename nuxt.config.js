const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid:  'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      // { name: 'language', content: 'en', 'hid': 'language' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js', type: 'text/javascript', defer: true},
      { src: '/plugins/imagesloaded.pkgd.min.js', type: 'text/javascript', defer: true },
      { src: '/plugins/owl.carousel.min.js', type: 'text/javascript', defer: true },
      { src: '/plugins/masonry.pkgd.min.js', type: 'text/javascript', defer: true },
      { src: '/js/navigation.js', type: 'text/javascript', defer: true },
      { src: '/js/skip-link-focus-fix.js', type: 'text/javascript', defer: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700'},

      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#2d89ef" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    '@/assets/css/font-awesome.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/owl.theme.css',
    '@/assets/css/skin.less',
    '@/assets/css/style.less',
    '@/assets/css/variables.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      // '~/plugins/fireauth.js'
  ],

  router: {
    middleware: [
        // 'router-auth',
        'article'
    ]
  },


  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // 'nuxtent'
    'nuxtdown', // configured in nuxtdown.config.js
   // 'nuxt-purgecss',
  ],


  purgeCSS: {
   // your settings here
  },


  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
