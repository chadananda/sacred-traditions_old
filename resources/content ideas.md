# Sacred-Traditions
## a bootstrap 4 / vue.js component based blog and fundraising platform

## Technical Structure

* Nuxt-style automatic routes with MD content
  * https://github.com/40818419/vue-router-sitemap
  * https://github.com/codingfriend1/vue-static

* SEO-friendly
  * Static build (like nuxt): prerender-spa-plugin
    * Build on pre-commit hooks for Github hosting
  * Metadata: https://github.com/declandewet/vue-meta
  * Sitemap: https://github.com/40818419/vue-router-sitemap

* Functionality Modules/Components
  * Bootstrap 4: https://bootstrap-vue.js.org/
  * Google Analytics:
  * Facebook comments:
  * Events Calendar


## Site Starter Content/Structure

* Top Level Static
   * Home Page / Overview / Mission (re-use astria sections)
   * Projects Overview & List
     * Individual Projects Page

* Calendar of Promoted Events

* Ocean Product Page
   * Recent feature updates
   * Announcement mailing list
   * Support forum
   * Ocean related projects for fundrasing and volunteers
   * Global usage report (eventually)

* Blog of faith ideas


# st2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
