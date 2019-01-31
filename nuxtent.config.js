const Prism = require('prismjs');

module.exports = {
 content: [
   ["articles", {
     page: '/articles/_article',
     permalink: '/articles/:slug',
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["narration", {
    page: '/_narration',
    permalink: 'narration/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["translations", {
    page: '/_translations',
    permalink: 'translations/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["projects", {
     page: '/_projects',
     permalink: "projects/:slug",
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   ["courses", {
    page: '/_courses',
    permalink: '/courses/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
   ["events", {
    page: '/events/_event',
    permalink: 'events/:slug',
    isPost: false,
    generate: [ 'get', 'getAll' ]
   }],
 ],

    parsers: {
        md: {
            extend(config) {
                config.highlight = (code, lang) => {
                    return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
                }
            }
        }
    },

    api: function(isStatic) {
        return {
            // baseURL: 'http://localhost:1844',
            baseURL: '',
            browserBaseURL: isStatic ? 'https://sacred-traditions.org' : ''
        }
    }
};