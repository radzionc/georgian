/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  exclude: ['/oauth/*', '/account', '/email-auth', '/email-confirm'],
}
