import Vuex from 'vuex';
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            articles: []
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user;
            }
        },
        mutations: {
            setUser (state, payload) {
                state.user = payload;
            },
            setArticles: (state, payload) => {
                state.articles = payload;
            }
        },
        actions: {
            setArticles ({commit}, payload) {
                commit('setArticles', payload);
            },
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
};

export default createStore