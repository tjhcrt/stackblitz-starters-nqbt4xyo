import { defineConfig } from 'vitepress'
import teek from 'vitepress-theme-teek'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MY YIGE WENDANGZHAN",
  description: "A SITE",

  theme: teek({
    blog: {
      enabled: true,
      postDir: 'posts'
    },

    // 👇原来 themeConfig 里面的内容全部搬到这里
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '博客', link: '/posts/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  })

})