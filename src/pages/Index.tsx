import { useState } from "react";
import { lookupProduct, ProductData } from "@/lib/productData";
import { SearchBar } from "@/components/SearchBar";
import { Receipt } from "@/components/Receipt";
import { EducationSection } from "@/components/EducationSection";
import { ArrowLeftRight, X } from "lucide-react";

const SUGGESTIONS = [
  "Nike Air Force 1",
  "iPhone 15",
  "Starbucks Latte",
  "H&M T-Shirt",
  "Ray-Ban Aviators",
  "Coca-Cola",
  "Yeti Tumbler",
];

const Index = () => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [compareProduct, setCompareProduct] = useState<ProductData | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [searchingFor, setSearchingFor] = useState<"primary" | "compare">("primary");

  const handleSearch = (query: string, price?: number) => {
    const result = lookupProduct(query, price);
    if (searchingFor === "compare") {
      setCompareProduct(result);
      setSearchingFor("primary");
    } else {
      setProduct(result);
      setCompareProduct(null);
    }
  };

  const startCompare = () => {
    setCompareMode(true);
    setSearchingFor("compare");
    setCompareProduct(null);
  };

  const exitCompare = () => {
    setCompareMode(false);
    setCompareProduct(null);
    setSearchingFor("primary");
  };

  return (
    <div className="min-h-screen bg-background pt-12">
      {/* Hero */}
      <header className="pt-16 sm:pt-24 pb-10 px-4 text-center">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wider text-foreground leading-none">
          THE PRICE IS <span className="text-primary">WRONG</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto font-mono">
          Here's what they don't tell you on the price tag.
        </p>

        <div className="mt-8">
          <SearchBar
            onSearch={handleSearch}
            placeholder={
              compareMode && searchingFor === "compare"
                ? "Search a second product to compare..."
                : 'Try "Nike Air Force 1" or "iPhone 15"'
            }
          />
        </div>

        {/* Suggestion chips */}
        {!product && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSearch(s)}
                className="px-3 py-1 text-xs font-mono border border-border rounded hover:border-primary/50 hover:text-primary text-muted-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Results */}
      {product && (
        <main className="px-4 pb-20">
          {/* Compare toggle */}
          <div className="max-w-4xl mx-auto flex justify-center mb-8">
            {!compareMode ? (
              <button
                onClick={startCompare}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono border border-border rounded hover:border-primary/50 hover:text-primary text-muted-foreground transition-colors"
              >
                <ArrowLeftRight className="w-3 h-3" />
                COMPARE WITH ANOTHER PRODUCT
              </button>
            ) : (
              <button
                onClick={exitCompare}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono border border-primary/30 rounded text-primary hover:bg-primary/10 transition-colors"
              >
                <X className="w-3 h-3" />
                EXIT COMPARE MODE
              </button>
            )}
          </div>

          {/* Receipt(s) */}
          <div
            className={`max-w-4xl mx-auto ${
              compareProduct
                ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                : "flex justify-center"
            }`}
          >
            <Receipt product={product} />
            {compareProduct && <Receipt product={compareProduct} />}
          </div>

          {/* Search another */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setProduct(null);
                setCompareProduct(null);
                setCompareMode(false);
              }}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              ← Search another product
            </button>
          </div>
        </main>
      )}

      {/* Education section on home page */}
      {!product && (
        <div className="border-t border-border mt-12">
          <EducationSection />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center">
        <p className="text-[10px] font-mono text-muted-foreground max-w-md mx-auto leading-relaxed">
          DISCLAIMER: All cost breakdowns are estimates based on publicly available
          industry data, teardown analyses, and supply chain research. Actual costs
          vary by region, time, and specific product variants. This tool is for
          educational purposes only.
        </p>
      </footer>
    </div>
  );
};

export default Index;
