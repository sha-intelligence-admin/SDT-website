import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
    allowedHosts: [
      'sdt-website.onrender.com', // ✅ allow your Render domain
    ],
    host: true, // 👈 allows external access (important for Render)
    port: process.env.PORT || 5173, // 👈 makes sure Render port works
  },
  build: {
    // Optimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          icons: ['lucide-react'],
          marquee: ['react-fast-marquee']
        }
      }
    },
    // Reduce bundle size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },
  // CSS optimization
  css: {
    devSourcemap: false
  }
})