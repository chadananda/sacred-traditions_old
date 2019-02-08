const mutations = {
    setUser (state, payload) {
        state.user = payload;
    },

    setArticles: (state, payload) => {
        state.articles = payload;
    },

    SET_LANG: (state, payload) => {
        state.language = payload
    }
};

export default mutations