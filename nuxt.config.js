export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eric Maina | Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I am a design-minded front-end developer or sometimes called UI developer. I write HTML, CSS/SCSS and JavaScript that powers Web user interfaces and multi-platform single codebase desktop and mobile applications with a focus on responsive design, accessibility and perfomance.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'frontend developer, front-end developer, web developer, website developer, web designer, website designer, ui designer, ui developer, accessibility, accessible design, accessibility developer',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@100;400;600&family=Outfit:wght@400;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@nuxtjs/svg',
  ],

  styleResources: {
    scss: ['~/assets/styles/config.scss'],
    hoistUseStatements: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  image: {
    domains: [process.env.STRAPI_URL],
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    version: 'v4',
  },
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  sitemap: {
    hostname: process.env.HOST || 'https://itseric.netlify.app',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
      {
        url: '/blog/:slug',
        changefreq: 'weekly',
        priority: 1,
      },
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios100
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      short_name: 'Eric M.',
      name: 'Eric Maina — Frontend Developer',
      description:
        'I am a design-minded front-end developer or sometimes called UI developer. I write HTML, CSS/SCSS and JavaScript that powers Web user interfaces and multi-platform single codebase desktop and mobile applications with a focus on responsive design, accessibility and perfomance.',
      theme_color: '#8570c2',
      background_color: '#050506',
    },
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
