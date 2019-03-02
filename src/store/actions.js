const actions = {
    assignArticles: (context, articles) => {
        context.commit('SET_ARTICLES', articles)
    }
};

export default actions
