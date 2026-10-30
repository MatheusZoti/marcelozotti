// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marcelozotti.com.br', // provisório: confirmar domínio
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
