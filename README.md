# Elizabeth Nijjar Law Corporation website

Next.js (App Router), TypeScript and Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Before launch

1. **Testimonials:** `data/testimonials.ts` holds sample copy only. Replace it with approved reviews and set
   `isPlaceholder: false`. The visible "sample" notice disappears when none remain.
2. **Contact form:** set the variables in `.env.example` in Vercel. Until then the form shows visitors the
   phone number and email address rather than confirming a send.
3. **Privacy Policy and Terms of Use:** `/privacy` and `/terms` are noindexed placeholders
   (`components/ui/LegalPlaceholder.tsx`).
4. **Logo:** source artwork is `public/logonre.png`; the web versions are in `public/logo/` and `app/icon.png`.
5. **Legal review:** service content in `data/services.ts` should be reviewed by the lawyer.

## Editing content

- Firm details: `lib/site.ts`
- Services and FAQs: `data/services.ts`
- Navigation: `data/navigation.ts`

## Images

Photos in `public/images` come from Unsplash (Unsplash License), stored locally. To view a source, use
`https://images.unsplash.com/photo-<id>`:

| File | Unsplash id |
| --- | --- |
| hero-lady-justice | 1589578527966-fdac0f44566c |
| gavel | 1575505586569-646b2ca898fc |
| law-library | 1505664194779-8beaceb93744 |
| office | 1497215728101-856f4ea42174 |
| courthouse-columns | 1436450412740-6b988f486c6b |
| divorce-hands | 1544027993-37dbfe43562a |
| signing-agreement | 1450101499163-c8848c66ca85 |
| family-sunset | 1511895426328-dc8714191300 |
| child-support-paperwork | 1554224154-26032ffc0d07 |
| spousal-support-meeting | 1565688534245-05d6b5be184a |
| handshake | 1521791136064-7986c2920216 |
| books-and-pen | 1423592707957-3b212afa6733 |
| vancouver-skyline | 1559511260-66a654ae982a |
