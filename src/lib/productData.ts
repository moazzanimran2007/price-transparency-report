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

interface CategoryProfile {
  keywords: string[];
  priceRange: [number, number];
  materialPct: [number, number];
  laborPct: [number, number];
  overheadPct: [number, number];
  shippingPct: [number, number];
  dutiesPct: [number, number];
  marketingPct: [number, number];
  shameRange: [number, number];
  insights: string[];
}

const categoryProfiles: CategoryProfile[] = [
  {
    keywords: ["shoe", "sneaker", "boot", "jordan", "adidas", "puma", "new balance", "converse", "vans", "crocs", "sandal"],
    priceRange: [40, 250],
    materialPct: [0.04, 0.08], laborPct: [0.02, 0.04], overheadPct: [0.02, 0.05],
    shippingPct: [0.03, 0.05], dutiesPct: [0.03, 0.06], marketingPct: [0.18, 0.30],
    shameRange: [60, 85],
    insights: [
      "Footwear is one of the most aggressively marketed consumer categories. The average sneaker costs $15-25 to manufacture but sells for $80-250. Factory workers in Vietnam, Indonesia, and China typically earn $2-5/day assembling shoes that sell for their weekly wage.",
      "The footwear industry spends more on athlete endorsements than on the workers who make the shoes. A single celebrity deal can cost more than an entire factory's annual payroll. The 'performance technology' marketed in most shoes adds $1-3 to production cost but $30-80 to retail price.",
      "Sneaker culture has turned shoes into speculative assets. Limited releases create artificial scarcity, driving resale markups of 200-1000%. The manufacturing cost difference between a $90 shoe and a $250 'premium' version is often less than $5.",
    ],
  },
  {
    keywords: ["phone", "iphone", "samsung", "pixel", "galaxy", "android", "smartphone", "tablet", "ipad", "laptop", "macbook", "computer", "airpod", "headphone", "earbud", "watch", "apple watch"],
    priceRange: [50, 1500],
    materialPct: [0.12, 0.25], laborPct: [0.01, 0.03], overheadPct: [0.03, 0.06],
    shippingPct: [0.01, 0.02], dutiesPct: [0.01, 0.03], marketingPct: [0.10, 0.18],
    shameRange: [45, 70],
    insights: [
      "Electronics have some of the lowest labor-to-price ratios of any consumer product. Assembly workers handle components worth hundreds of dollars but earn a fraction of a percent of the final price. The R&D costs are real but amortized across millions of units.",
      "Tech companies achieve 40-65% gross margins by controlling both hardware and software ecosystems. Once you're in the ecosystem (iCloud, Google services), switching costs keep you locked in — paying the premium indefinitely.",
      "Planned obsolescence is built into the business model. Software updates slow older devices, batteries degrade by design, and repair is deliberately made difficult. The true cost includes replacing the device every 2-3 years.",
    ],
  },
  {
    keywords: ["coffee", "latte", "espresso", "tea", "drink", "juice", "smoothie", "soda", "beer", "wine", "water", "energy drink", "redbull", "monster"],
    priceRange: [1.5, 15],
    materialPct: [0.03, 0.10], laborPct: [0.15, 0.25], overheadPct: [0.10, 0.20],
    shippingPct: [0.02, 0.05], dutiesPct: [0.01, 0.02], marketingPct: [0.08, 0.18],
    shameRange: [50, 75],
    insights: [
      "Beverages have some of the highest markups in consumer goods. The raw ingredients in most drinks cost pennies, but you're paying for the experience, the location, and the brand. A coffee shop's real product isn't coffee — it's a comfortable place to sit.",
      "The beverage industry relies on habit formation. Daily purchases of $3-7 drinks add up to $1,000-2,500/year — enough to meaningfully impact household budgets. The convenience premium is a tax on routine.",
      "From farm to cup, coffee passes through 6-8 intermediaries, each taking a cut. The farmer receives 1-3% of the retail price of a specialty coffee drink. Fair trade certification improves this slightly but doesn't address the structural markup.",
    ],
  },
  {
    keywords: ["shirt", "t-shirt", "tee", "jeans", "pants", "jacket", "hoodie", "dress", "skirt", "sweater", "coat", "zara", "uniqlo", "gap", "clothes", "clothing", "fashion", "legging", "lululemon", "supreme"],
    priceRange: [8, 200],
    materialPct: [0.06, 0.14], laborPct: [0.03, 0.08], overheadPct: [0.04, 0.08],
    shippingPct: [0.04, 0.08], dutiesPct: [0.03, 0.06], marketingPct: [0.10, 0.25],
    shameRange: [45, 75],
    insights: [
      "The fashion industry is built on the disconnect between perceived value and production cost. A garment worker's wage is typically 0.5-3% of the retail price. Fast fashion amplifies this by producing billions of units at razor-thin per-unit labor costs.",
      "Clothing markups vary wildly by brand positioning. A $10 H&M shirt and a $90 'premium basics' shirt often come from the same factories in Bangladesh or Vietnam. The difference is branding, marketing, and retail environment.",
      "The environmental cost of fashion isn't in the price tag. The industry is responsible for 10% of global carbon emissions and is the second-largest consumer of water. If environmental externalities were priced in, fast fashion would be 30-50% more expensive.",
    ],
  },
  {
    keywords: ["glasses", "sunglasses", "eyewear", "lens", "frames", "oakley", "gucci", "prada"],
    priceRange: [80, 400],
    materialPct: [0.02, 0.04], laborPct: [0.01, 0.03], overheadPct: [0.02, 0.04],
    shippingPct: [0.01, 0.02], dutiesPct: [0.01, 0.03], marketingPct: [0.20, 0.30],
    shameRange: [80, 95],
    insights: [
      "Eyewear is dominated by Luxottica (now EssilorLuxottica), which controls ~80% of major brands AND the retail stores that sell them. This vertical monopoly allows markups of 10-20x production cost — among the highest in any consumer category.",
      "The eyewear monopoly is so complete that Luxottica once dropped Oakley's stock price by threatening to stop carrying them, then bought the company at a discount. Your $200 'designer' frames cost $15-25 to manufacture.",
    ],
  },
  {
    keywords: ["burger", "pizza", "food", "meal", "sandwich", "taco", "sushi", "chicken", "fries", "mcdonalds", "chipotle", "subway", "restaurant"],
    priceRange: [3, 25],
    materialPct: [0.20, 0.35], laborPct: [0.20, 0.30], overheadPct: [0.10, 0.18],
    shippingPct: [0.02, 0.05], dutiesPct: [0.005, 0.02], marketingPct: [0.05, 0.12],
    shameRange: [25, 55],
    insights: [
      "Food service has relatively fair labor-to-price ratios compared to manufactured goods, though wages remain low. The biggest cost driver is rent and overhead — your $12 sandwich is subsidizing the restaurant's lease more than the ingredients.",
      "Fast food chains achieve consistency by centralizing production. The actual restaurant is more of a reheating and assembly station. This efficiency keeps prices low but at the cost of food quality, worker conditions, and local food economies.",
      "The food industry externalizes massive costs: agricultural subsidies (taxpayer-funded), health consequences of processed food, and environmental damage from industrial farming. The true cost of a fast food meal is estimated at 2-3x its price tag.",
    ],
  },
  {
    keywords: ["bag", "purse", "handbag", "backpack", "luggage", "wallet", "louis vuitton", "gucci", "coach", "michael kors"],
    priceRange: [30, 500],
    materialPct: [0.03, 0.10], laborPct: [0.02, 0.06], overheadPct: [0.02, 0.05],
    shippingPct: [0.02, 0.04], dutiesPct: [0.02, 0.05], marketingPct: [0.20, 0.35],
    shameRange: [60, 90],
    insights: [
      "Luxury bags are perhaps the purest example of Veblen goods — products where higher prices increase desirability. A $3,000 Louis Vuitton bag costs $100-200 to produce. The premium is entirely social signaling and brand mythology.",
      "The leather goods industry uses 'made in Italy/France' labels strategically. Components are often manufactured in China or Eastern Europe, then assembled in a luxury country for the 'origin' label. This practice, called 'country of assembly,' inflates perceived value.",
    ],
  },
  {
    keywords: ["cream", "lotion", "serum", "perfume", "cologne", "makeup", "cosmetic", "skincare", "shampoo", "soap", "beauty", "lipstick", "foundation"],
    priceRange: [5, 150],
    materialPct: [0.02, 0.06], laborPct: [0.01, 0.03], overheadPct: [0.03, 0.06],
    shippingPct: [0.02, 0.04], dutiesPct: [0.01, 0.03], marketingPct: [0.25, 0.40],
    shameRange: [65, 88],
    insights: [
      "Beauty and skincare products have some of the highest marketing-to-production cost ratios in consumer goods. The active ingredients in a $60 serum typically cost $0.50-2.00. You're paying for the packaging, the brand story, and the promise of transformation.",
      "The fragrance industry's margins are staggering. A $120 perfume contains $2-4 worth of fragrance oils. Celebrity-endorsed perfumes often cost more in licensing fees to the celebrity than in actual perfume production.",
      "Many 'premium' skincare ingredients (hyaluronic acid, retinol, niacinamide) are commodity chemicals that cost pennies per dose. The 'proprietary blend' marketing obscures that a $12 drugstore product often contains identical active ingredients to a $90 department store one.",
    ],
  },
  },
  {
    keywords: ["banana", "apple", "orange", "grape", "fruit", "vegetable", "tomato", "potato", "onion", "lettuce", "avocado", "strawberry", "blueberry", "mango", "grocery", "egg", "milk", "bread", "rice", "pasta", "cereal", "cheese", "yogurt", "butter", "chicken breast", "ground beef", "salmon", "produce"],
    priceRange: [0.5, 12],
    materialPct: [0.25, 0.40], laborPct: [0.08, 0.15], overheadPct: [0.05, 0.10],
    shippingPct: [0.08, 0.15], dutiesPct: [0.005, 0.03], marketingPct: [0.02, 0.08],
    shameRange: [15, 45],
    insights: [
      "Grocery items have some of the thinnest retail margins in consumer goods — typically 1-3% net profit for supermarkets. The farmer receives 15-25% of the retail price for produce. Most of the cost is in cold chain logistics, distribution, and retail overhead, not markup.",
      "Fresh produce is one of the few product categories where the supply chain cost structure is relatively fair. The biggest markup happens at the retail level — supermarkets use produce as a 'loss leader' priced near cost to get you in the store, then profit on packaged goods.",
      "Organic and 'premium' grocery labels can carry 30-100% markups over conventional equivalents, despite production cost differences of only 10-20%. The label premium far exceeds the actual farming cost premium in most cases.",
    ],
  },
  {
    keywords: ["candy", "chocolate", "snack", "chips", "cookie", "gum", "protein bar", "granola", "crackers", "oreo", "doritos", "pringles"],
    priceRange: [1, 8],
    materialPct: [0.10, 0.20], laborPct: [0.05, 0.10], overheadPct: [0.05, 0.10],
    shippingPct: [0.05, 0.08], dutiesPct: [0.01, 0.03], marketingPct: [0.15, 0.25],
    shameRange: [35, 60],
    insights: [
      "Packaged snacks have surprisingly high marketing-to-ingredient ratios. The corn in a bag of Doritos costs pennies; the brand, packaging, and shelf placement fees account for 40-60% of what you pay. 'Shrinkflation' — reducing package size while keeping the price — is the industry's favorite hidden markup.",
      "The snack industry spends billions engineering 'bliss points' — the perfect combination of salt, sugar, and fat that maximizes craveability. This R&D is real but serves to create addictive consumption patterns rather than nutritional value.",
    ],
  },
];

const defaultProfile: CategoryProfile = {
  keywords: [],
  priceRange: [15, 300],
  materialPct: [0.05, 0.15], laborPct: [0.03, 0.08], overheadPct: [0.03, 0.07],
  shippingPct: [0.03, 0.06], dutiesPct: [0.02, 0.05], marketingPct: [0.12, 0.25],
  shameRange: [40, 75],
  insights: [
    "Most consumer products follow a predictable pattern: raw materials and labor account for 10-25% of the retail price, while marketing, retail markup, and corporate profit absorb the rest. This gap between production cost and selling price is where value chain economics gets interesting.",
    "The modern supply chain is designed to minimize production cost while maximizing perceived value. Every touchpoint — from packaging design to store layout to influencer partnerships — exists to justify the gap between what a product costs to make and what you pay for it.",
    "Understanding markup structures reveals a fundamental truth about consumer capitalism: price is rarely a reflection of cost. It's a reflection of what the market will bear, which is shaped by branding, competition, and consumer psychology.",
  ],
};

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function lerp(min: number, max: number, t: number): number {
  return min + (max - min) * t;
}

function generateGenericProduct(name: string, userPrice?: number): ProductData {
  const lower = name.toLowerCase();
  const hash = lower.split("").reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0);
  const rand = seededRandom(hash);

  // Find matching category
  const profile = categoryProfiles.find(p =>
    p.keywords.some(kw => lower.includes(kw))
  ) ?? defaultProfile;

  // Use user-supplied price, or generate from category range
  const retailPrice = userPrice ?? +lerp(profile.priceRange[0], profile.priceRange[1], rand()).toFixed(2);

  const materialPct = lerp(profile.materialPct[0], profile.materialPct[1], rand());
  const laborPct = lerp(profile.laborPct[0], profile.laborPct[1], rand());
  const overheadPct = lerp(profile.overheadPct[0], profile.overheadPct[1], rand());
  const shippingPct = lerp(profile.shippingPct[0], profile.shippingPct[1], rand());
  const dutiesPct = lerp(profile.dutiesPct[0], profile.dutiesPct[1], rand());
  const marketingPct = lerp(profile.marketingPct[0], profile.marketingPct[1], rand());

  const allocated = materialPct + laborPct + overheadPct + shippingPct + dutiesPct + marketingPct;
  const remaining = Math.max(0, 1 - allocated);
  const retailerSplit = 0.45 + rand() * 0.2;
  const retailerPct = remaining * retailerSplit;
  const profitPct = remaining * (1 - retailerSplit);

  const manufacturingCost = (materialPct + laborPct + overheadPct) * retailPrice;
  const multiplier = manufacturingCost > 0 ? +(retailPrice / manufacturingCost).toFixed(1) : 5.0;
  const shameScore = Math.round(lerp(profile.shameRange[0], profile.shameRange[1], rand()));

  const insightIndex = Math.floor(rand() * profile.insights.length);
  const learnWhy = profile.insights[insightIndex];

  // Proper title case
  const displayName = name.split(" ").map(w => {
    if (w.length <= 3 && w === w.toUpperCase()) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");

  return {
    name: displayName,
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
    shameScore,
    learnWhy,
  };
}

export function lookupProduct(query: string, userPrice?: number): ProductData {
  const key = query.toLowerCase().trim();
  for (const [k, v] of Object.entries(productDatabase)) {
    if (key.includes(k) || k.includes(key)) {
      // If user provided a price, scale the known product's breakdown proportionally
      if (userPrice && userPrice > 0) {
        const scale = userPrice / v.retailPrice;
        return {
          ...v,
          retailPrice: userPrice,
          breakdown: v.breakdown.map(b => ({
            ...b,
            amount: +(b.amount * scale).toFixed(2),
          })),
        };
      }
      return v;
    }
  }
  return generateGenericProduct(key, userPrice);
}

export function getShameLabel(score: number): { label: string; color: string } {
  if (score < 30) return { label: "Fair Trade", color: "hsl(145, 63%, 42%)" };
  if (score < 50) return { label: "Reasonable", color: "hsl(90, 55%, 45%)" };
  if (score < 65) return { label: "Questionable", color: "hsl(45, 70%, 50%)" };
  if (score < 80) return { label: "Exploitative", color: "hsl(20, 70%, 50%)" };
  return { label: "Pure Extraction", color: "hsl(355, 72%, 56%)" };
}
