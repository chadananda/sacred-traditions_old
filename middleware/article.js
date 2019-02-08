export default function({ isHMR, app, store, route }) {
    const lang = store.getters.currentLang;
    if (isHMR) {
        return;
    }

    if (store.getters.getArticles.length === 0) { // if articles is empty, fetch list of articles from nuxtent api.
        app.$content('/articles').query({exclude: ['body']}).getAll()
            .then(rsp => {
                let articles = filterArticles(rsp, lang);
                store.commit('setArticles', articles);
            })
            .catch(() => {
                store.commit('setArticles', []);
            })
    }
}

function filterArticles(articles, lang) {
    let _articles = [];
    articles.forEach(article => {
        if (article.language === lang) {
            _articles.push(article);
        }
    });
    return _articles;
}