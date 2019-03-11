class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

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
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js'
        ],
        extractor: TailwindExtractor,
        extensions: ['vue', 'js']
      }
    }
  ],
  port: 3000
}
