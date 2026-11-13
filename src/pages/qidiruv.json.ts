import type { APIRoute } from 'astro';
import { barchaMaqolalar, maqolaYoli } from '../lib/maqolalar';
import { mavzuTop } from '../data/mavzular';

// Qidiruv uchun maqolalar ro'yxati (sayt yig'ilganda tayyorlanadi).
export const GET: APIRoute = async () => {
  const maqolalar = await barchaMaqolalar();
  const royxat = maqolalar.map((m) => ({
    manzil: maqolaYoli(m),
    sarlavha: m.data.sarlavha,
    qisqacha: m.data.qisqacha,
    mavzu: mavzuTop(m.data.mavzu).nom,
    // Qidiruvda maqola ichidagi bo'lim sarlavhalari ham hisobga olinadi.
    bolimlar: (m.body ?? '')
      .split('\n')
      .filter((q) => /^#{2,3}\s/.test(q))
      .map((q) => q.replace(/^#+\s*/, ''))
      .join(' '),
  }));
  return new Response(JSON.stringify(royxat), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
