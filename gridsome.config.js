module.exports = {
  siteName: `sacred-traditions`,
  titleTemplate: `%s`,

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
