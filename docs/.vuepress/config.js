module.exports = {
  base: '/fmgg/',
  dest: './dist',
  title: '访美观感',
  description: '访美观感，电子书',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    nav: [],
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: {
      '/version_1/': [
        '00.md', '01.md', '02.md', '03.md', '04.md',
        '05.md', '06.md', '07.md', '08.md', '09.md'
      ]
    }
  }
}