# Nutri Hayot sayti

Ovqatlanish ilmiga oid maqolalar sayti. Astro asosida qurilgan statik sayt: sahifalar oldindan tayyorlanadi va tez ochiladi.

## Ishga tushirish

```
npm install
npm run dev      # kompyuterda ko'rish: http://localhost:4321
npm run build    # tayyor saytni dist/ papkasiga yig'ish
```

## Yangi maqola qo'shish

`src/content/maqolalar/` papkasida yangi `.md` fayl oching. Fayl nomi maqola manzili bo'ladi:
`d-vitamini.md` → `/maqolalar/d-vitamini/`. Nomda faqat kichik lotin harflari, raqam va chiziqcha ishlating.

```
---
sarlavha: "Maqola sarlavhasi"
mavzu: vitaminlar-minerallar
qisqacha: "Maqolaning asosiy fikri bir-ikki gapda."
sana: 2026-11-13
manbalar:
  - matn: "Mualliflar. Tadqiqot nomi. Jurnal, yil."
    havola: "https://..."
---

Kirish matni.

## Birinchi bo'lim

Matn. Manbaga ishora qilish uchun [1] deb yozing: u pastdagi ro'yxatdagi 1-manbaga havola bo'ladi.
```

- `mavzu` qiymatlari `src/data/mavzular.ts` faylidagi `slug`lardan biri bo'lishi kerak.
- `##` bilan boshlangan bo'lim sarlavhalari mundarijaga o'zi qo'shiladi.
- `qoralama: true` deb yozilgan maqola saytga chiqmaydi.
- `yangilangan: 2026-12-01` qo'shilsa, maqolada yangilangan sana ko'rinadi.

## Boshqa joylar

- Mavzular ro'yxati: `src/data/mavzular.ts`
- Sayt nomi, shiori, Telegram va Instagram havolalari: `src/data/sayt.ts`
- Lug'at atamalari: `src/content/lugat/` (har bir atama alohida `.md` fayl)
- Ranglar va shriftlar: `src/styles/asos.css` boshidagi o'zgaruvchilar
- Domen: `astro.config.mjs` ichidagi `site`

## Internetga chiqarish

Sayt GitHub Pages'da turadi. `main` tarmog'iga yuborilgan har bir o'zgarishdan keyin
`.github/workflows/deploy.yml` saytni o'zi qayta yig'ib, yangilaydi. Domen: nutrihayot.uz
(`public/CNAME` va `astro.config.mjs` dagi `site`).

Birinchi haqiqiy maqola joylangach, `src/content/maqolalar/namuna-maqola.md` namunasini o'chiring.
