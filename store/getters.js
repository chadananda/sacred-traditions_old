const getters = {
    activeUser: (state, getters) => {
        return state.user;
    },

    getArticles: (state, getters) => {
        return state.articles;
    },

    currentLang: (state, getters) => {
        return state.language;
    }
};

export default getters