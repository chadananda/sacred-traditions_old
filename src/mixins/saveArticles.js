export default {
  mounted() {
    if (this.$store.getters.getAllArticles.length === 0) {
      this.$store.commit('setAllArticles', this.$static.allArticle.edges)
      this.$store.dispatch('setLanguageList', this.$static.allArticle.edges)
      this.$store.dispatch('assignLanguage', localStorage.getItem("st_ux_lang") || 'en')
    }
  }
}
