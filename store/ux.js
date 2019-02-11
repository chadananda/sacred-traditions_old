// store/ux.js
// vuex functionality for ux



export const state = () => ({
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
  }
})

export const getters = {
  currentLang: (state, getters) => {
    return state.language;
  },

  languageList: (state, getters) => {
    return Object.assign({}, state.languages)
  }
}

export const mutations = {
  SET_LANG: (state, payload) => {
   state.language = payload
   localStorage.setItem("st_ux_lang", payload)
  }
}

export const actions = {
  // global set language -- must be an action because mutations should not call other mutations
  assignLanguage: (context, lang) => {
    lang = lang.trim().toLowerCase().slice(0, 2) // clean up input
    if (lang === context.state.language) return // exit if this language is already selected
    if (!(lang in context.state.languages)) return
    context.commit('SET_LANG', lang)  // update and store
    context.commit('articles/setArticleLanguage', lang, {root:true}) // re-filter articles
  }

}


