require('dotenv').config({
  path: process.env.NODE_ENV ? '.env.production' : '.env.dev',
})

// console.log('process.env.NODE_ENV:', process.env.NODE_ENV,
// process.env.ALGOLIA_INDEX_NAME, process.env.ALGOLIA_APP_ID )



const collections = [
  {
    contentTypeName: 'articles',
    indexName: process.env.ALGOLIA_INDEX_NAME, // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        slug: item.snip,
        modified: String(item.pubdate)
      }
    }, // optional
    matchFields: ['slug', 'modified'], // Array<String> required with PartialUpdates
  },
];


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
    },



    // why is this not working?
    // {
    //   use: `gridsome-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     collections,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: true, // default: false
    //   },
    // }


  ],




  port: 3000,


  // I think we can remove this.
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg')
  //   svgRule.uses.clear()
  //   svgRule
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader')
  // }

}
