export default function({ isHMR, app, store, route }) {
    if (isHMR) {
        return;
    }

    app.$content('/articles').query({exclude: ['body']}).getAll()
        .then(rsp => {
            console.log(rsp);
        })
        .catch(() => {
            console.log('error');
        })

}