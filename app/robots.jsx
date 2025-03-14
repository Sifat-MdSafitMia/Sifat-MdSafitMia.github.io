export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/', '/about', '/certifications', '/achievments', '/contact'],
        //   disallow: ['/robots.txt', '/sitemap.xml', ],
        },
      ],
      sitemap: 'https://sifat-mdsafitmia.github.io/sitemap.xml',
    }
  }