import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import type { UserConfig } from 'vite'

export default defineNuxtConfig({
  vite: {
    plugins: [Components({
      dirs: ['./components'],
      resolvers: [AntDesignVueResolver({
        importStyle: true,
      })],
    })],
    optimizeDeps: {
      include: ['@icon-park/vue-next'],
    },
  } as UserConfig,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['ant-design-vue', 'compute-scroll-into-view'],
  },
})
