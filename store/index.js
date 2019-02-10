// store/index.js
// root store module
// ideally, this file should be nearly empty


export const state = () => ({
  user: null,
  language: 'en',
  languages: [
    {code: 'en', name: 'English'},
    {code: 'it', name: 'Italian'}
  ],
})

export const getters = {
  activeUser: (state, getters) => {
    return state.user;
  },

  currentLang: (state, getters) => {
      return state.language;
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload;
  },
  SET_LANG: (state, payload) => {
    state.language = payload
  }
}

export const actions = {

}


