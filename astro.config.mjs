import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

// "site" — saytning domeni. Havolalar, sitemap va Telegramdagi ko'rinish (preview) shunga tayanadi.
export default defineConfig({
  site: 'https://nutrihayot.uz',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    // O'zbekcha apostroflar (o', g') o'zgarmasligi uchun "aqlli" tirnoqlar o'chirilgan.
    processor: satteri({ features: { smartPunctuation: false } }),
  },
});
