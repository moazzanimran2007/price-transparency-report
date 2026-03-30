export interface CostBreakdown {
  label: string;
  amount: number;
  color: string;
}

export interface ProductData {
  name: string;
  retailPrice: number;
  breakdown: CostBreakdown[];
  markupMultiplier: number;
  shameScore: number; // 0-100
  learnWhy: string;
}

const productDatabase: Record<string, ProductData> = {
  "nike air force 1": {
    name: "Nike Air Force 1",
    retailPrice: 110,
    breakdown: [
      { label: "Raw Materials", amount: 5.50, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 2.75, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 3.30, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 4.40, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 5.50, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 27.50, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 33.00, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 28.05, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 9.5,
    shameScore: 78,
    learnWhy: "Nike spends more on marketing a single pair of Air Force 1s than it costs to manufacture them. The $2.75 in labor represents workers in Vietnam earning roughly $0.20/hour for skilled assembly work. The 'brand premium' — what you pay for the swoosh — accounts for over 50% of the retail price. This is textbook rent-seeking: extracting value from brand perception rather than material worth.",
  },
  "iphone 15": {
    name: "iPhone 15",
    retailPrice: 799,
    breakdown: [
      { label: "Raw Materials", amount: 135.00, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 18.00, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 30.00, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 8.00, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 12.00, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 120.00, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 160.00, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 316.00, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 4.4,
    shameScore: 65,
    learnWhy: "Apple's bill of materials for the iPhone 15 is roughly $423 — but the actual hands-on labor to assemble it in Foxconn's facilities costs just $18. Apple's gross margins hover around 45%, among the highest in consumer electronics. The R&D costs are real but spread across 200+ million units/year, making per-unit R&D negligible. What you're really paying for is ecosystem lock-in.",
  },
  "starbucks latte": {
    name: "Starbucks Grande Latte",
    retailPrice: 5.75,
    breakdown: [
      { label: "Raw Materials", amount: 0.35, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 1.20, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 0.85, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 0.25, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 0.05, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 0.75, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 1.30, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 1.00, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 16.4,
    shameScore: 72,
    learnWhy: "The coffee beans in your $5.75 latte cost about $0.06. The milk costs about $0.29. Together, the raw ingredients are worth less than a pack of gum. Starbucks' markup is extreme, but unlike sneakers, they do employ baristas at minimum wage or above. The real question: why does hot water + beans + milk cost more than a gallon of gas? Location rent-seeking and brand conditioning.",
  },
  "h&m t-shirt": {
    name: "H&M Basic T-Shirt",
    retailPrice: 9.99,
    breakdown: [
      { label: "Raw Materials", amount: 1.10, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 0.50, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 0.60, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 0.80, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 0.40, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 1.50, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 3.09, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 2.00, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 4.5,
    shameScore: 58,
    learnWhy: "A garment worker in Bangladesh earns roughly $0.03 to sew your H&M t-shirt — that's about 3 minutes of minimum wage in the US. Fast fashion's low prices mask enormous human and environmental costs not reflected in the price tag. The $9.99 feels cheap, but the true cost includes water pollution, carbon emissions, and poverty wages. H&M's model depends on volume — sell billions of units at thin margins.",
  },
  "ray-ban aviators": {
    name: "Ray-Ban Aviator Classic",
    retailPrice: 163,
    breakdown: [
      { label: "Raw Materials", amount: 3.50, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 2.80, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 4.20, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 2.00, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 3.00, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 40.00, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 55.00, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 52.50, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 15.5,
    shameScore: 88,
    learnWhy: "Luxottica — the monopoly behind Ray-Ban, Oakley, Prada eyewear, and LensCrafters — controls nearly 80% of the major eyewear brands AND the retail stores that sell them. Your $163 aviators cost about $10.50 to make. This is one of the purest examples of monopolistic rent-seeking in consumer goods. The 'luxury' is entirely manufactured through vertical integration and artificial scarcity.",
  },
  "coca-cola": {
    name: "Coca-Cola (20oz Bottle)",
    retailPrice: 2.29,
    breakdown: [
      { label: "Raw Materials", amount: 0.08, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 0.04, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 0.15, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 0.30, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 0.02, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 0.55, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 0.65, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 0.50, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 19.1,
    shameScore: 70,
    learnWhy: "The ingredients in a Coke — water, high fructose corn syrup, caramel color, phosphoric acid, caffeine — cost roughly 8 cents. Coca-Cola spends $4 billion annually on advertising to maintain the perception that sugar water is worth $2.29. The bottle itself costs more than its contents. This is brand value distilled to its purest form: you're paying for a feeling, not a product.",
  },
  "yeti tumbler": {
    name: "YETI Rambler 20oz Tumbler",
    retailPrice: 35,
    breakdown: [
      { label: "Raw Materials", amount: 3.00, color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: 1.50, color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: 2.00, color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: 2.50, color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: 1.00, color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: 8.00, color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: 9.00, color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: 8.00, color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: 5.4,
    shameScore: 52,
    learnWhy: "YETI tumblers use the same 18/8 stainless steel and vacuum insulation technology as $12 alternatives on Amazon. The difference? YETI has built an aspirational outdoor lifestyle brand. Their gross margins exceed 57%. That said, their quality control is genuinely higher — but the premium you pay is mostly for the logo and the cultural signaling it provides.",
  },
};

function generateGenericProduct(name: string): ProductData {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const retailPrice = 10 + (hash % 490);
  const materialPct = 0.05 + (hash % 15) / 100;
  const laborPct = 0.02 + (hash % 8) / 100;
  const overheadPct = 0.03 + (hash % 6) / 100;
  const shippingPct = 0.03 + (hash % 5) / 100;
  const dutiesPct = 0.02 + (hash % 4) / 100;
  const marketingPct = 0.15 + (hash % 15) / 100;
  const total = materialPct + laborPct + overheadPct + shippingPct + dutiesPct + marketingPct;
  const remaining = 1 - total;
  const retailerPct = remaining * 0.55;
  const profitPct = remaining * 0.45;

  const manufacturingCost = (materialPct + laborPct + overheadPct) * retailPrice;
  const multiplier = +(retailPrice / manufacturingCost).toFixed(1);

  return {
    name: name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    retailPrice,
    breakdown: [
      { label: "Raw Materials", amount: +(retailPrice * materialPct).toFixed(2), color: "hsl(200, 70%, 50%)" },
      { label: "Manufacturing Labor", amount: +(retailPrice * laborPct).toFixed(2), color: "hsl(170, 60%, 45%)" },
      { label: "Factory Overhead", amount: +(retailPrice * overheadPct).toFixed(2), color: "hsl(145, 55%, 42%)" },
      { label: "Shipping & Logistics", amount: +(retailPrice * shippingPct).toFixed(2), color: "hsl(50, 70%, 50%)" },
      { label: "Import Duties & Tariffs", amount: +(retailPrice * dutiesPct).toFixed(2), color: "hsl(30, 70%, 50%)" },
      { label: "Brand Marketing", amount: +(retailPrice * marketingPct).toFixed(2), color: "hsl(355, 72%, 56%)" },
      { label: "Retailer Markup", amount: +(retailPrice * retailerPct).toFixed(2), color: "hsl(280, 60%, 50%)" },
      { label: "Corporate Profit", amount: +(retailPrice * profitPct).toFixed(2), color: "hsl(0, 0%, 35%)" },
    ],
    markupMultiplier: multiplier,
    shameScore: 30 + (hash % 55),
    learnWhy: `Based on industry averages for similar products, the manufacturing cost of a "${name}" represents a fraction of what you pay at retail. Marketing and brand positioning typically account for 15-30% of consumer product pricing, while corporate margins and retail markups absorb the bulk. The gap between cost-of-goods and shelf price reveals the hidden economics of modern consumer capitalism.`,
  };
}

export function lookupProduct(query: string): ProductData {
  const key = query.toLowerCase().trim();
  for (const [k, v] of Object.entries(productDatabase)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return generateGenericProduct(key);
}

export function getShameLabel(score: number): { label: string; color: string } {
  if (score < 30) return { label: "Fair Trade", color: "hsl(145, 63%, 42%)" };
  if (score < 50) return { label: "Reasonable", color: "hsl(90, 55%, 45%)" };
  if (score < 65) return { label: "Questionable", color: "hsl(45, 70%, 50%)" };
  if (score < 80) return { label: "Exploitative", color: "hsl(20, 70%, 50%)" };
  return { label: "Pure Extraction", color: "hsl(355, 72%, 56%)" };
}
