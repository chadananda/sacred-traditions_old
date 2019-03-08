const links = {
  state: {
    social_links: [
      // { id: 1, icon: "twitter" },
      { id: 2, icon: "facebook", url:"https://www.facebook.com/The-Dawn-Breakers-Challenge-329820570524376/" },
      // { id: 3, icon: "instagram" },
      // { id: 4, icon: "pinterest" },
      { id: 5, icon: "youtube", url:"" }
    ]
  },
  getters: {
    getSocialLinks: (state, getters) => {
      if (Array.isArray(state.social_links)) return state.social_links.slice()
      else return []
    },
  },
  mutations: {

  },
  actions: {

  }
}

export default links
