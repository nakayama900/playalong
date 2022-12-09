import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import yaml from '@rollup/plugin-yaml'
import suidPlugin from "@suid/vite-plugin";
export default defineConfig({
  plugins: [yaml(),suidPlugin(),solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
