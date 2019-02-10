export default function({ isHMR, app, store, route, req }) {
    let lang = null;
    if (isHMR) {
        return;
    }

    if (document.cookie) {
        const cookies = document.cookie.split('; ').map(stringCookie => stringCookie.split('='));
        const cookie = cookies.find(cookie => cookie[0] === 'language');

        if (cookie) {
            lang = cookie[1];
        }

        if (!lang) {
            lang = store.getters.currentLang;
        }

        store.commit('SET_LANG', lang);
    } else {
        lang = store.getters.currentLang;
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
