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
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 0.1
          },
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.2
          },
          '/about': {
            changefreq: 'weekly',
            priority: 0.3
          },
          '/contact': {
            changefreq: 'weekly',
            priority: 0.4
          },
          '/ocean': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/privacy': {
            changefreq: 'weekly',
            priority: 0.6
          }
        }
      }
    }
  ],
  port: 3000
}
