module.exports = {
  siteName: `sacred-traditions`,
  titleTemplate: `%s`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    }
  ],
  port: 3000
}
