import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            articles: []
        },
        actions,
        mutations,
        getters,
    })
};

export default createStore