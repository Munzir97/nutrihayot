import { getCollection, type CollectionEntry } from 'astro:content';

export type Maqola = CollectionEntry<'maqolalar'>;

// Barcha maqolalar, yangisi birinchi. Qoralamalar faqat ishlab chiqish rejimida ko'rinadi.
export async function barchaMaqolalar(): Promise<Maqola[]> {
  const hammasi = await getCollection('maqolalar', ({ data }) =>
    import.meta.env.PROD ? !data.qoralama : true,
  );
  return hammasi.sort((a, b) => b.data.sana.valueOf() - a.data.sana.valueOf());
}

export function maqolaYoli(m: Maqola): string {
  return `/maqolalar/${m.id}/`;
}

const OYLAR = [
  'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
  'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr',
];

// 2026-yil 13-noyabr
export function sanaMatn(d: Date): string {
  return `${d.getUTCFullYear()}-yil ${d.getUTCDate()}-${OYLAR[d.getUTCMonth()]}`;
}

// Taxminiy o'qish vaqti, daqiqada.
export function oqishVaqti(matn: string | undefined): number {
  const sozlar = (matn ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(sozlar / 180));
}
