// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      wordpressUrl: 'https://abi-construction.kz/graphql'
    }
  },
  plugins: ['@/plugins/mapGoogle.client.js']
})
