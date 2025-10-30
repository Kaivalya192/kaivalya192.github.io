import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages note: keep base: '/' for kaivalya192.github.io.
// If deploying from another repo (e.g. /portfolio/), change base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
