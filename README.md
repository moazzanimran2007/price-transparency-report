# The Price Is Wrong

A financial literacy web app that breaks a product's price into where the money goes: materials, factory labor, shipping, duties, marketing, the retailer's cut and the brand's profit. Built for the Hackonomics 2026 hackathon.

## What it does

- **Search for a product** and get a receipt-style breakdown of its retail price across eight cost lines.
- **See the markup.** It shows how many times the manufacturing cost the retail price is, and a "Shame-O-Meter" score from 0 to 100 for how lopsided the split is.
- **Learn why.** Each product comes with a short explanation of the economics behind its numbers, and a Learn page adds short insights and a 12-term glossary (markup, rent-seeking, value chain, gross margin, externality and more).
- **Ask "what if".** Sliders let you change labor, marketing and profit to see how the price would move, for example if factory workers were paid more.
- **Compare two products** side by side.
- **Use your own price.** Enter what you paid and the breakdown scales to it.
- **Share the result.**

## About the numbers

All figures are estimates, and the app labels them that way.

- Seven products have hand-entered breakdowns: Nike Air Force 1, iPhone 15, a Starbucks latte, an H&M T-shirt, Ray-Ban Aviators, a 20 oz Coca-Cola and a YETI tumbler.
- Any other search gets a generated estimate. The app matches the product to one of ten categories (shoes, electronics, drinks, clothing, eyewear, fast food, bags, beauty, produce and snacks, with a general profile as the fallback) and picks shares within that category's preset ranges. The same search always gives the same result.

Everything lives in `src/lib/productData.ts`. It is a teaching tool, not a cost database.

## Run it

You need Node.js 18 or newer.

```bash
git clone https://github.com/moazzanimran2007/price-transparency-report.git
cd price-transparency-report
npm install
npm run dev
```

Then open the local address Vite prints. `npm run build` makes a production build.

## Tech stack

React and TypeScript on Vite, Tailwind CSS with shadcn/ui components, Recharts for charts, the Web Audio API for sound effects and React Router for the Home, Learn and About pages. Built with Lovable. Everything runs in the browser with no backend.
