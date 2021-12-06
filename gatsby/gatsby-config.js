const dotenv = require('dotenv');

dotenv.config({
    path: '.env'
})

module.exports = {
    siteMetadata: {
      title: `Fresh blog`,
      siteUrl: `https://fresh.blog`,
      description: `Blazing fast modern site generator for React`,
      author: `Pavel Sushkin`,
      vk: `vk.com/tsvetnie_sni`
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: '5zf87s54',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN
            }
        }
    ]
  }