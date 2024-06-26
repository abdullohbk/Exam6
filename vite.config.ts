import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@layut', replacement: '/src/layout' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@router', replacement: '/src/router' },
      { find: '@modals', replacement: '/src/components/modals' },


      { find: '@coocse', replacement: '/src/utils/cocies.ts' },
      { find: '@globol-interface', replacement: '/src/types/globol-interface' },

      { find: '@category', replacement: '/src/service/category' },
      { find: '@worker', replacement: '/src/service/worker' },
      { find: '@product', replacement: '/src/service/product' },



      { find: '@store-categors', replacement: '/src/store/categors'},
      { find: '@store-worker', replacement: '/src/store/worker'},
      { find: '@store-product', replacement: '/src/store/products'},

    ]
  }
})
