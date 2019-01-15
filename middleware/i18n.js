export default function ({isHMR, app, store, route, params, error, redirect}) {
    if (isHMR) {
        return;
    }
    else if (!params.lang) {
        return redirect('/en'+route.fullPath);
    }
    const locale = params.lang || 'en';
    store.commit('SET_LANG', locale);
    app.i18n.locale = store.state.locale;
}