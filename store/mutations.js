const mutations = {
    setUser (state, payload) {
        state.user = payload;
    },
    setArticles: (state, payload) => {
        state.articles = payload;
    }
};

export default mutations