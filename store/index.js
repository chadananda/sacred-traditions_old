import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            articles: [],
            language: 'en',
        },
        mutations,
        getters,
    })
};

export default createStore