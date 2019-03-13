module.exports = {
  siteName: `sacred-traditions`,
  titleTemplate: `%s`,
  siteUrl: 'https://sacred-traditions.org',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/articles/**/*.md',
        typeName: 'Article',
        route: '/articles/:slug'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [ ],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 0.1
          },
          '/*': {
            changefreq: 'weekly',
            priority: 0.2
          },
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.3
          }
        }
      }
    }
  ],
  port: 3000
}
