import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            articles: [],
            language: 'en',
            languages: [
                {code: 'en', name: 'English'},
                {code: 'it', name: 'Spanish'}
            ],
        },
        mutations,
        getters,
    })
};

export default createStore
