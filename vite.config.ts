import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/big-english-2-adventure/', plugins: [react()], test: { environment: 'jsdom', setupFiles: './src/test-setup.ts' } });
