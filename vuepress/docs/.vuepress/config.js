module.exports = {

  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/assets/images/favicon.png' }],
  ],
  title: 'sacred-traditions',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      		{ text: "Home", link: "/" },
            { text: "- Ocean 2.0 Reader -", link: "/ocean/" },
            { text: "About Us", link: "/about/" },
            { text: "Contact", link: "/contact/" }
    ]
  }
  
}