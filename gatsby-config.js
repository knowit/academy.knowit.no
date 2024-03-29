const { version, author } = require('./package.json')

module.exports = {
  flags: {
    // DEV_SSR: true,
  },
  siteMetadata: {
    title: 'Knowit Academy Norway',
    siteUrl: 'https://academy.knowit.no/',
    email: 'academy@knowit.no',
    version,
    author,
    description: `Knowit Academy er Knowits kompetanseutviklingsprogram for ansatte i Norge. Programmene blir gjennomført årlig og følger skoleåret. Årets søknadsfrist er utvidet til fredag 16. september, og programmene vil starte opp i siste halvdel av oktober.`,
    ogImage:
      'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
    image:
      'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
    logo: 'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-theme-material-ui',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-69253249-4',
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['material icons'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Knowit Academy Norge',
        lang: 'no',
        short_name: 'Academy',
        start_url: '/',
        background_color: '#f1f0ed',
        theme_color: '#b7debd',
        categories: ['education'],
        description:
          'Informasjon om Knowits kompetanseutviklingsprogram for alle ansatte i Norge.',
        display: 'fullscreen',
        orientation: 'any',
        icon: 'static/knowit_academy_flamingo_favicon.png',
      },
    },
  ],
}
