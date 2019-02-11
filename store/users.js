// store/users.js
// vuex functionality for users



export const state = () => ({
  user: null,
})

export const getters = {
  activeUser: (state, getters) => {
   return state.user;
  },
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload;
  },
}

export const actions = {
}


