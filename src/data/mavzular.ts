// Mavzular ro'yxati. Tartib bosh sahifadagi tartibni belgilaydi.
// Yangi mavzu qo'shish uchun shu ro'yxatga bitta qator qo'shish kifoya.
export interface Mavzu {
  slug: string;
  nom: string;
  tavsif: string;
}

export const MAVZULAR: Mavzu[] = [
  {
    slug: 'asoslar',
    nom: "Sog'lom ovqatlanish asoslari",
    tavsif: "Muvozanatli ratsion, porsiya va mahsulot yorliqlarini o'qish.",
  },
  {
    slug: 'makronutrientlar',
    nom: "Oqsil, yog', uglevod",
    tavsif: 'Asosiy oziq moddalar, kletchatka, shakar va xolesterin.',
  },
  {
    slug: 'vitaminlar-minerallar',
    nom: 'Vitaminlar va minerallar',
    tavsif: "Har bir vitamin va mineralning vazifasi, manbalari va me'yori.",
  },
  {
    slug: 'ichimliklar',
    nom: 'Suv va ichimliklar',
    tavsif: 'Suv, choy, qahva, shirin va energetik ichimliklar.',
  },
  {
    slug: 'mahsulotlar',
    nom: 'Mahsulotlar',
    tavsif: "Alohida mahsulotlarning tarkibi va salomatlikka ta'siri.",
  },
  {
    slug: 'parhezlar',
    nom: 'Parhezlar tahlili',
    tavsif: 'Mashhur parhezlarning ilmiy bahosi.',
  },
  {
    slug: 'vazn',
    nom: 'Vazn boshqaruvi',
    tavsif: 'Ozish, vazn olish va modda almashinuvi.',
  },
  {
    slug: 'kasalliklar',
    nom: 'Kasalliklar va ovqatlanish',
    tavsif: "Ovqatlanishning kasalliklar profilaktikasi va kechishidagi o'rni.",
  },
  {
    slug: 'hayot-davrlari',
    nom: 'Yosh va hayot davrlari',
    tavsif: "Homiladorlik, bolalik, o'smirlik va keksalikda ovqatlanish.",
  },
  {
    slug: 'sport',
    nom: 'Sport va faol hayot',
    tavsif: "Jismoniy faollik va mashg'ulotlar uchun ovqatlanish.",
  },
  {
    slug: 'qoshimchalar',
    nom: "Biologik faol qo'shimchalar",
    tavsif: "Qo'shimchalar: qaysi biri uchun ilmiy dalil bor, qaysi biri uchun yo'q.",
  },
  {
    slug: 'miflar',
    nom: "Miflar va da'volar",
    tavsif: "Ommabop da'volarning ilmiy tekshiruvi.",
  },
];

export const MAVZU_SLUGLARI = MAVZULAR.map((m) => m.slug) as [string, ...string[]];

export function mavzuTop(slug: string): Mavzu {
  const m = MAVZULAR.find((x) => x.slug === slug);
  if (!m) throw new Error(`Noma'lum mavzu: ${slug}`);
  return m;
}
