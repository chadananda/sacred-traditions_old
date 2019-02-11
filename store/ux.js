// store/ux.js
// vuex functionality for ux



export const state = () => ({
  language: 'en',
  languages: [
    {code: 'en', name: 'English'},
    {code: 'it', name: 'Italian'}
  ],
})

export const getters = {
  currentLang: (state, getters) => {
    return state.language;
  },

  languageList: (state, getters) => {
    if (!Array.isArray(state.languages)) return []
      else return state.languages.slice()
  }
}

export const mutations = {
  SET_LANG: (state, payload) => {
   state.language = payload
  }
}

export const actions = {


}


