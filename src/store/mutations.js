const mutations = {
    setAllArticles: (state, articles) => {
        state.allArticles = articles
        let lang = state.language || 'en'
        state.articles = state.allArticles.filter(a => a.node.language===lang)
    },

    setArticleLanguage: (state, lang) => {
        state.articles = state.allArticles.filter(a => a.language===lang)
    },

    setLang: (state, payload) => {
        state.language = payload
        localStorage.setItem("st_ux_lang", payload)
    }
};

export default mutations
