module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    }
  ]
}
