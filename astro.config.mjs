import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { readdirSync, readFileSync } from 'node:fs';

// Har bir maqolaning oxirgi o'zgargan sanasi (frontmatter'dagi "yangilangan" yoki "sana").
// Sitemap'da <lastmod> sifatida beriladi, Google yangilangan sahifalarni tezroq qayta ko'radi.
const maqolaSanalari = Object.fromEntries(
  readdirSync('./src/content/maqolalar')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const matn = readFileSync(`./src/content/maqolalar/${f}`, 'utf-8');
      const sana = (matn.match(/^yangilangan:\s*(\S+)/m) ?? matn.match(/^sana:\s*(\S+)/m))?.[1];
      return [`/maqolalar/${f.replace(/\.md$/, '')}/`, sana];
    }),
);

// "site" — saytning domeni. Havolalar, sitemap va Telegramdagi ko'rinish (preview) shunga tayanadi.
export default defineConfig({
  site: 'https://nutrihayot.uz',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (sahifa) => !sahifa.includes('/qidiruv/'),
      serialize(element) {
        const sana = maqolaSanalari[new URL(element.url).pathname];
        if (sana) element.lastmod = new Date(sana).toISOString();
        return element;
      },
    }),
  ],
  markdown: {
    // O'zbekcha apostroflar (o', g') o'zgarmasligi uchun "aqlli" tirnoqlar o'chirilgan.
    processor: satteri({ features: { smartPunctuation: false } }),
  },
});
