const actions = {
    // global set language -- must be an action because mutations should not call other mutations
    assignLanguage: (context, lang) => {
        lang = lang.trim().toLowerCase().slice(0, 2) // clean up input
        if (lang === context.state.language) return // exit if this language is already selected
        if (!(lang in context.state.languages)) return
        context.commit('setLang', lang)  // update and store
        context.commit('setArticleLanguage', lang, {root:true}) // re-filter articles
    }
};

export default actions
