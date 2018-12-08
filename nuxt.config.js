const pkg = require('./package')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/sacred-traditions/'
  }
} : {}



module.exports = {
  mode: 'spa',

  // ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js', type: 'text/javascript' },
      { src: 'plugins/imagesloaded.pkgd.min.js', type: 'text/javascript' },
      { src: 'plugins/owl.carousel.min.js', type: 'text/javascript' },
      { src: 'plugins/masonry.pkgd.min.js', type: 'text/javascript' },
      { src: 'js/navigation.js', type: 'text/javascript' },
      { src: 'js/skip-link-focus-fix.js', type: 'text/javascript' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700'}
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
    '@/assets/css/skin.css',
    '@/assets/css/style.css',
    '@/assets/css/variables.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
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
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   // if (ctx.isDev && ctx.isClient) {
    //   //   config.module.rules.push({
    //   //     enforce: 'pre',
    //   //     test: /\.(js|vue)$/,
    //   //     loader: 'eslint-loader',
    //   //     exclude: /(node_modules)/
    //   //   })
    //   // }
    // }
  }
}
