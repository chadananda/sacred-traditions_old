import firebase, {auth, GoogleProvider} from '@/services/fireinit.js';

const actions = {
    autoSignIn ({commit}, payload) {
        commit('setUser', payload)
    },

    signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
            auth.signInWithRedirect(GoogleProvider);
            resolve();
        })
    },

    signOut ({commit}) {
        auth.signOut().then(() => {
            commit('setUser', null);
        }).catch(err => console.log(error))
    },


    setArticles ({commit}, payload) {
        commit('setArticles', payload);
    },
};

export default actions