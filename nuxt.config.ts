// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/animate.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/leaflet",
    "@prisma/nuxt",
    "@nuxtjs/tailwindcss"
  ],
  router: {
    options: {
      scrollBehaviorType : "smooth",
    }
  }
});