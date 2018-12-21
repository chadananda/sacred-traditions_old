module.exports = {
 content: [
   ["articles", {
     page: '/articles/_slug',
     permalink: ':slug',
     isPost: false,
     generate: [ 'get', 'getAll' ]
   }],
   // ["narration", {
   //  page: '/narration/_slug',
   //  permalink: '/narration/:slug_:lang',
   //  isPost: false
   // }],
   // ["translations", {
   //  page: '/translations/_slug',
   //  permalink: '/translations/:slug_:lang',
   //  isPost: false
   // }],
   // ["projects", {
   //   page: '/projects/_slug',
   //   permalink: ":slug",
   //   isPost: false
   // }],
   // ["courses", {
   //  page: '/courses/_slug',
   //  permalink: '/courses/:slug_:lang',
   //  isPost: false
   // }],
   // ["events", {
   //  page: '/events/_slug',
   //  permalink: '/events/:slug_:lang',
   //  isPost: false
   // }],
 ],
 api: isStatic => {
  return {
    browserBaseURL: isStatic ? 'https://sacred-traditions' : '',
  }
},

}