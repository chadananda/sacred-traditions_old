import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/font-awesome.css'
import '~/assets/css/owl.carousel.css'
import '~/assets/css/owl.theme.css'
import '~/assets/css/skin.less'
import '~/assets/css/style.less'
import '~/assets/css/variables.less'
import jquery from 'jquery'
import Vuex from 'vuex'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

export default function (Vue, { head, appOptions }) {
  Vue.use(Bootstrap)
  Vue.use(Vuex)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  })
  Vue.prototype.$jquery = jquery

  // set Vuex store
  appOptions.store = new Vuex.Store({
    state: {
      articles: []
    },
    mutations,
    getters,
    actions
  })
}
