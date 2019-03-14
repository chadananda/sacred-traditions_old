import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/font-awesome.css'
import '~/assets/css/owl.carousel.css'
import '~/assets/css/owl.theme.css'
import '~/assets/css/skin.less'
import '~/assets/css/style.less'
import '~/assets/css/variables.less'
import Vuex from 'vuex'
import articles from './store/articles'
import ux from './store/ux'
import links from './store/links'

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
    // these resources did not exist
    // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    // { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700', defer: true },
    // { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
    // { rel: 'manifest', href: '/site.webmanifest' },
    // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#2d89ef" }
  )

  head.script.push(
      // {type: 'text/javascript', src: '/assets/js/jquery-3.3.1.min.js', body: true, defer: true},
      {type: 'text/javascript', src: '/assets/plugins/imagesloaded.pkgd.min.js', body: true, defer: true},
      {type: 'text/javascript', src: '/assets/plugins/owl.carousel.min.js', body: true, defer: true},
      {type: 'text/javascript', src: '/assets/plugins/masonry.pkgd.min.js', body: true, defer: true},
      {type: 'text/javascript', src: '/assets/js/navigation.js', body: true, defer: true},
      {type: 'text/javascript', src: '/assets/js/skip-link-focus-fix.js', body: true, defer: true}
  )

  // set Vuex store
  appOptions.store = new Vuex.Store({
    modules: {
      articles: articles,
      ux: ux,
      links: links
    }
  })
}
