export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Markup",
    definition: "The difference between a product's cost to produce and its selling price. Expressed as a percentage or multiplier of the production cost.",
    example: "A shoe costing $12 to make and selling for $110 has a ~9x markup.",
  },
  {
    term: "Rent-Seeking",
    definition: "Extracting economic value without creating new wealth. In consumer goods, this often means charging more due to brand perception, monopoly power, or artificial scarcity rather than actual product improvements.",
    example: "Luxottica controls 80% of eyewear brands AND retail stores, allowing them to charge $150+ for glasses that cost $10 to make.",
  },
  {
    term: "Value Chain",
    definition: "The full range of activities businesses perform to bring a product from conception to delivery. Each step in the chain adds cost — and potential markup.",
    example: "A t-shirt's value chain: cotton farming → spinning → weaving → dyeing → cutting → sewing → shipping → retail.",
  },
  {
    term: "Cost of Goods Sold (COGS)",
    definition: "The direct costs attributable to producing the goods sold by a company — including raw materials and direct labor, but excluding marketing, overhead, and distribution.",
  },
  {
    term: "Gross Margin",
    definition: "The percentage of revenue remaining after subtracting COGS. High gross margins indicate significant markup between production cost and selling price.",
    example: "Apple's gross margin is ~45%, meaning for every $1 of revenue, $0.55 goes to non-production costs and profit.",
  },
  {
    term: "Transfer Pricing",
    definition: "The price at which divisions of a company transact with each other. Multinationals often use transfer pricing to shift profits to low-tax jurisdictions, obscuring true costs.",
  },
  {
    term: "Brand Premium",
    definition: "The additional amount consumers pay for a branded product compared to an equivalent unbranded or generic alternative. Driven by marketing, perceived quality, and social signaling.",
    example: "Generic ibuprofen and Advil contain the same active ingredient, but Advil costs 3-5x more.",
  },
  {
    term: "Supply Chain Transparency",
    definition: "The extent to which consumers and stakeholders can access information about the origins, costs, and conditions under which a product was made.",
  },
  {
    term: "Tariff",
    definition: "A tax imposed on imported goods, paid by the importing company and typically passed on to the consumer. Tariffs can significantly increase the final retail price.",
    example: "US tariffs on Chinese goods can add 7.5-25% to the cost of imported electronics and clothing.",
  },
  {
    term: "Externality",
    definition: "A cost or benefit of production that affects parties not directly involved in the transaction. Pollution, worker health impacts, and environmental degradation are negative externalities not reflected in product prices.",
    example: "Fast fashion's environmental cost (water pollution, carbon emissions) isn't included in a $9.99 t-shirt price.",
  },
  {
    term: "Price Elasticity",
    definition: "How sensitive consumer demand is to price changes. Luxury brands exploit low price elasticity — their customers won't stop buying if prices increase.",
  },
  {
    term: "Vertical Integration",
    definition: "When a company controls multiple stages of its supply chain. This can reduce costs but also enables monopolistic pricing when a single entity controls production AND retail.",
    example: "Luxottica makes Ray-Ban, owns LensCrafters, and controls the insurance vision plan EyeMed.",
  },
];

export const educationalInsights = [
  {
    title: "The Labor Cost Paradox",
    content: "In most consumer products, the people who physically make the product receive less than 3% of the retail price. A $110 sneaker involves $2-3 of assembly labor. This disconnect between 'made by hand' marketing and actual worker compensation is one of the most significant ethical issues in global trade.",
    icon: "👷",
  },
  {
    title: "Marketing > Manufacturing",
    content: "For major brands, marketing spend routinely exceeds total manufacturing cost by 3-10x. Nike spends approximately $4 billion annually on marketing — roughly $18 per pair of shoes sold — compared to ~$5 in manufacturing labor per pair.",
    icon: "📢",
  },
  {
    title: "The Monopoly Effect",
    content: "When one company controls an entire market (like Luxottica with eyewear), prices detach from production costs entirely. Monopolistic rent-seeking is responsible for some of the highest markups in consumer goods — 15-20x production cost is common.",
    icon: "🏛️",
  },
  {
    title: "Hidden Environmental Costs",
    content: "The price tag doesn't include externalities: water pollution from textile dyeing, carbon from shipping, e-waste from planned obsolescence. Economists estimate that if environmental costs were internalized, fast fashion would cost 30-50% more and electronics 15-25% more.",
    icon: "🌍",
  },
  {
    title: "The Fair Trade Gap",
    content: "Fair trade certification ensures minimum prices for raw materials, but even 'fair trade' products often have enormous markups at retail. A $5 fair trade coffee still pays the farmer only $0.10-0.15 per cup. The system addresses poverty wages but not the structural markup problem.",
    icon: "⚖️",
  },
];
