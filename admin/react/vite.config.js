// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    outDir: '../assets/react',
    rollupOptions: {
      input: './src/index.jsx',
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'index.css',
        inlineDynamicImports: true
      }
    }
  }
})
