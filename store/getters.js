const getters = {
    activeUser: (state, getters) => {
        return state.user;
    },

    getArticles: (state, getters) => {
        return state.articles;
    }
};

export default getters