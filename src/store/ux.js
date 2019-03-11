const ux = {
  state: {
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
  },
  getters: {
    languageList: (state, getters) => {
      return Object.assign({}, state.languages)
    },

    currentLang: (state, getters) => {
      return state.language;
    }
  },
  mutations: {
    setLang: (state, payload) => {
      state.language = payload
      localStorage.setItem("st_ux_lang", payload)
    }
  },
  actions: {
    // global set language -- must be an action because mutations should not call other mutations
    assignLanguage: (context, lang) => {
      lang = lang.trim().toLowerCase().slice(0, 2) // clean up input
      if (lang === context.state.language) return // exit if this language is already selected
      if (!(lang in context.state.languages)) return
      context.commit('setLang', lang)  // update and store
      context.commit('setArticleLanguage', lang, {root:true}) // re-filter articles
    }
  }
}

export default ux