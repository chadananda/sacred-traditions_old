const Prism = require('prismjs');

module.exports = {
 content: [
   ["articles", {
     page: '/articles/_article',
     permalink: '/articles/:slug',
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
            baseURL: 'http://localhost:3000',
            // browserBaseURL: 'http://127.0.0.1:8080',
            // browserBaseURL: '',
            // baseURL: process.env.NODE_ENV === 'production'  ? 'https://sacred-traditions.org' : '',
            browserBaseURL: 'https://sacred-traditions.org'
        }
    }
};
