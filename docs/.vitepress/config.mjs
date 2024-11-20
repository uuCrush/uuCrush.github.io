import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "uuCrushの小窝",
  description: "Writing makes perfect!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link:'/articles' },
      { text: 'Tech', link: '/tech' },
      { text: 'Product', link: '/product' },
      { text: 'Interview', link: '/interview' },
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/uuCrush' }
    ]
  }
})
