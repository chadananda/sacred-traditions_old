export default function({ isHMR, app, store, route, req }) {

  // load all articles if not loaded
  if (store.getters['articles/getAllArticles'].length === 0) { // if allArticles is empty, fetch list of articles from nuxtent api.
    app.$content('/articles').query({exclude: ['body']}).getAll()
      .then(articles => {
        // save all articles
        store.commit('articles/setAllArticles', articles)
        // set initial language
        store.dispatch('ux/assignLanguage', localStorage.getItem("st_ux_lang") || 'en')
    })
  }




}
