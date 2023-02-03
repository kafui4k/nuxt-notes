// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    apiSecret: process.env.NUXT_SUPABASE_KEY, // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: process.env.NUXT_SUPABASEURL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
