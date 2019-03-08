import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/font-awesome.css'
import '~/assets/css/owl.carousel.css'
import '~/assets/css/owl.theme.css'
import '~/assets/css/skin.less'
import '~/assets/css/style.less'
import '~/assets/css/variables.less'
// import jquery from 'jquery'
import Vuex from 'vuex'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

export default function (Vue, { head, appOptions }) {
  Vue.use(Bootstrap)
  Vue.use(Vuex)

  head.meta.push(
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#2d89ef' }
  )

  head.link.push(
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700' },
    { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#2d89ef" }
  )

  head.script.push(
      {type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.3.1.min.js', body: true},
      {type: 'text/javascript', src: '/assets/plugins/imagesloaded.pkgd.min.js', body: true},
      {type: 'text/javascript', src: '/assets/plugins/owl.carousel.min.js', body: true},
      {type: 'text/javascript', src: '/assets/plugins/masonry.pkgd.min.js', body: true},
      {type: 'text/javascript', src: '/assets/js/navigation.js', body: true},
      {type: 'text/javascript', src: '/assets/js/skip-link-focus-fix.js', body: true}
  )
  // Vue.prototype.$jquery = jquery

  // set Vuex store
  appOptions.store = new Vuex.Store({
    state: {
      allArticles: [],
      articles: [],
      language: 'en',
      languages: {
        'en': 'English',
        'it': 'Italiano',
        'ar': 'العربية',
        'fa': 'فارسی',
        'es': 'Español',
        'fr': 'français',
        'cn': '中文',
        'de': 'Deutsch',
        'ru': 'русский',
        'hi': 'हिन्दी'
      },
      social_links: [
        // { id: 1, icon: "twitter" },
        { id: 2, icon: "facebook", url:"https://www.facebook.com/The-Dawn-Breakers-Challenge-329820570524376/" },
        // { id: 3, icon: "instagram" },
        // { id: 4, icon: "pinterest" },
        { id: 5, icon: "youtube", url:"" }
      ]
    },
    mutations,
    getters,
    actions
  })
}
