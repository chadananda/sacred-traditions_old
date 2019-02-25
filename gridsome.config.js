module.exports = {
  siteName: `sacred-traditions`,
  titleTemplate: `%s`,
  siteUrl: 'https://sacred-traditions.org',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/articles/*.md',
        typeName: 'Article',
        route: '/articles/:slug'
      }
    }
  ],
  port: 3000
}
