import ar from "./utilities/lang/ar.json" ;
import en from "./utilities/lang/eng.json";

export default {
    head: {
        titleTemplate: 'Capital Sooq',
        title: 'Capital Sooq',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Capital Sooq desc'
            },
            {
                name: 'author',
                content: 'Ahmad E\'mar'
            },
            {
                name: 'keywords',
                content: 'Capital Sooq'
            },
            {
                name: 'Capital Sooq',
                content: 'Capital Sooq'
            },
            {
                name: 'application-name',
                content: 'Capital Sooq',
            },
            {
                name: 'msapplication-TileColor',
                content: '#cc9966'
            },
            {
                name: 'msapplication-config',
                content: '/images/icons/browserconfig.xml'
            }
        ],
        link: [
            {
                rel: 'dns-prefetch',
                href: "//fonts.googleapis.com"
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href:
                    './images/icons/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href:
                    './images/icons/favicon-16x16.png'
            },
            {
                rel: 'shortcut icon',
                href:
                    './images/icons/favicon.ico'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href:
                    './images/icons/apple-touch-icon.png'
            },
            {
                rel: 'manifest',
                href:
                    './images/icons/site.webmanifest'
            },
            {
                rel: 'mask-icon',
                color: '#666666',
                href:
                    './images/icons/safari-pinned-tab.svg'
            },
            {
                rel: 'stylesheet',
                href:
                    'http://fonts.googleapis.com/earlyaccess/droidarabickufi.css',
            }
        ],
    },

    css: [
        '~/static/vendor/line-awesome/css/line-awesome.min.css',
        'swiper/dist/css/swiper.css',
        '~/static/css/fonts-molla.min.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss',
    ],
    loading: {
        color: 'blue',
        height: '5px',
        throttle:5
      },
    plugins: [
        { src: '~/plugins/swiper.js', ssr: false },
        { src: '~/plugins/localStorage.js', ssr: false },
        { src: '~/plugins/modal.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/toastify.js', ssr: false },
        { src: '~/plugins/nouislider.js', ssr: false },
        { src: '~/plugins/sticky.js', ssr: false },
        { src: '~/plugins/dir.js', ssr: false },
    ],

    modules: [ '@nuxtjs/axios', '@nuxtjs/i18n' , 'google-fonts' ],
    i18n: {
        locales: [
            {
              code: 'en',
              file: 'en.json',
              dir: 'ltr',
              name: 'English',
            },
            {
              code: 'ar',
              file: 'ar.json',
              dir: 'rtl', 
              name: 'عربي',
            },
          ],
        defaultLocale: 'ar',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: en,
            ar: ar,
          }
        }
      },

    router: {
        base: '/',
        linkActiveClass: 'link-active',
        linkExactActiveClass: 'active'
    },
    // serverMiddleware: ['~/server-middleware/index.js'],

    pageTransition: 'page',

    build: {
        // publicPath: '/sooq-dist/assets'
    },

    generate: {
        // dir: '../../Sooq/public/app',
        subFolders: false,
        fallback: '404.html',
        ignore:['.htaccess']
    },

    ssr: false,

    server: {
        port: 5000,
        host: 'localhost'
    }
};
