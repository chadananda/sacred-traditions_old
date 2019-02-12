// store/articles.js
// vuex functionality for articles

// import


export const state = () => ({
  allArticles: [],
  articles: [],
})

export const getters = {
  // full list of language articles, not sorted
  getArticles: (state, getters) => {
    if (!Array.isArray(state.articles)) return []
    return state.articles.slice() //  copy of list
  },
  // full list of language articles, sorted by pubdate
  getRecentArticles:  (state, getters) => {
    if (!Array.isArray(state.articles)) return []
    let list = state.articles.slice() //  copy
    list.sort((b,a) => compareDate(a.pubdate, b.pubdate))
    return list
  },
  // full list of language articles sorted by popularity
  getPopularArticles: (state, getters) => {
    if (!Array.isArray(state.articles)) return []
    let list = state.articles.slice() //  copy
    list.sort((a,b) => b.likes-a.likes)
    return list
  },
  getAllArticles: (state, getters) => {
    if (!Array.isArray(state.allArticles)) return []
    let list = state.allArticles.slice() //  copy
    list.sort((b,a) => compareDate(a.pubdate, b.pubdate)) // sort
    return list
  },
  getTagList: (state, getters) => {
    let tags = {}, total = 0
    state.articles.forEach(a => a.tags.split(',').forEach(tag => {
      if (tag in tags) tags[tag]++; else tags[tag] = 1
      total++
    }))
    Object.keys(tags).forEach(tag => {
      tags[tag] = Math.round(tags[tag]/total*100)
    })
    return tags
  },
  getCategoryList: (state, getters) => {
    let cats = {}
    state.articles.forEach(a => a.category.split(',').forEach(cat =>  cats[cat] = 1 ))
    return Object.keys(cats)
  },
}

export const mutations = {
  setAllArticles: (state, articles) => {
    state.allArticles = articles
    let lang = state.language || 'en'
    state.articles = state.allArticles.filter(a => a.language===lang)
  },
  setArticleLanguage: (state, lang) => {
    state.articles = state.allArticles.filter(a => a.language===lang)
    //console.log('filtered to '+ state.articles.length+' articles in language: '+ lang)
  },
}

export const actions = {
}






/* =============================== article tools =================================== */

function compareDate(a,b) {
  // Compare two dates (could be of any type supported by the convert
  // function above) and returns:
  //  -1 : if a < b
  //   0 : if a = b
  //   1 : if a > b
  // NaN : if a or b is an illegal date
  // NOTE: The code inside isFinite does an assignment (=).
  return (
    isFinite(a= convert(a).valueOf()) &&
    isFinite(b= convert(b).valueOf()) ?
    (a>b)-(a<b) :
    NaN
  )
}
function convert(d) {
  // Converts the date in d to a date-object. The input can be:
  //   a date object: returned without modification
  //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
  //   a number     : Interpreted as number of milliseconds
  //                  since 1 Jan 1970 (a timestamp)
  //   a string     : Any format supported by the javascript engine, like
  //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
  //  an object     : Interpreted as an object with year, month and date
  //                  attributes.  **NOTE** month is 0-11.
  return (
    d.constructor === Date ? d :
    d.constructor === Array ? new Date(d[0],d[1],d[2]) :
    d.constructor === Number ? new Date(d) :
    d.constructor === String ? new Date(d) :
    typeof d === "object" ? new Date(d.year,d.month,d.date) :
    NaN
  )
}


