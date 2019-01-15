import Vuex from 'vuex';
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user;
            }
        },
        mutations: {
            setUser (state, payload) {
                state.user = payload;
            }
        },
        actions: {
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
            }
        }
    })
}

export default createStore

export const state = () => ({
    locales: ['en', 'fr'],
    locale: 'en'
});

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
};