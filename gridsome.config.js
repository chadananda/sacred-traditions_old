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
        exclude: [ ], // add url you want to exclude ex. '/about'
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
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-136207398-1'
      }
    }
  ],
  port: 3000,

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }

}
