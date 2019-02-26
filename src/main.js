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

export default function (Vue, { head }) {
  Vue.use(Bootstrap)

  // head.script.push({ src: 'https://code.jquery.com/jquery-3.3.1.min.js', type: 'text/javascript', defer: true })
  // head.script.push({ src: '/assets/js/script.min.js', type: 'text/javascript', defer: true })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  })
  Vue.prototype.$jquery = jquery
}
