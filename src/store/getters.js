const getters = {
    getArticles: (state, getters) => {
        return state.articles;
    },
    // full list of language articles sorted by popularity
    getPopularArticles: (state, getters) => {
        if (!Array.isArray(state.articles)) return []
        let list = state.articles.slice() //  copy
        list.sort((a,b) => b.node.likes-a.node.likes)
        return list
    },
};

export default getters
