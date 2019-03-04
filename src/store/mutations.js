const mutations = {
    setAllArticles: (state, articles) => {
        state.allArticles = articles
        let lang = state.language || 'en'
        state.articles = state.allArticles.filter(a => a.node.language===lang)
    }
};

export default mutations
