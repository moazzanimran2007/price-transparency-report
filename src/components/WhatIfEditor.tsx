import { useState, useMemo } from "react";
import { ProductData } from "@/lib/productData";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";

interface WhatIfEditorProps {
  product: ProductData;
}

export function WhatIfEditor({ product }: WhatIfEditorProps) {
  const [laborMultiplier, setLaborMultiplier] = useState(1);
  const [marketingCut, setMarketingCut] = useState(100);
  const [profitCut, setProfitCut] = useState(100);
  const [open, setOpen] = useState(false);

  const laborItem = product.breakdown.find(b => b.label === "Manufacturing Labor");
  const marketingItem = product.breakdown.find(b => b.label === "Brand Marketing");
  const profitItem = product.breakdown.find(b => b.label === "Corporate Profit");

  const adjusted = useMemo(() => {
    const laborOrig = laborItem?.amount ?? 0;
    const marketingOrig = marketingItem?.amount ?? 0;
    const profitOrig = profitItem?.amount ?? 0;

    const laborNew = laborOrig * laborMultiplier;
    const marketingNew = marketingOrig * (marketingCut / 100);
    const profitNew = profitOrig * (profitCut / 100);

    const diff = (laborNew - laborOrig) + (marketingNew - marketingOrig) + (profitNew - profitOrig);
    const newPrice = product.retailPrice + diff;

    return {
      laborNew,
      marketingNew,
      profitNew,
      newPrice: Math.max(0, newPrice),
      savings: product.retailPrice - Math.max(0, newPrice),
      laborRaise: laborMultiplier > 1 ? `${((laborMultiplier - 1) * 100).toFixed(0)}% raise` : "No change",
    };
  }, [laborMultiplier, marketingCut, profitCut, product, laborItem, marketingItem, profitItem]);

  if (!laborItem || !marketingItem || !profitItem) return null;

  return (
    <div className="border border-border rounded p-4 sm:p-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono tracking-widest text-muted-foreground">
            WHAT IF? SCENARIO EDITOR
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="mt-6 space-y-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Drag the sliders to explore alternate pricing scenarios. What would this product cost if workers were paid fairly? If marketing budgets were slashed?
          </p>

          {/* Labor multiplier */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-foreground">Worker Pay</span>
              <span className="text-fair">{laborMultiplier}x ({adjusted.laborRaise})</span>
            </div>
            <Slider
              value={[laborMultiplier]}
              onValueChange={([v]) => setLaborMultiplier(v)}
              min={1}
              max={10}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Current (${laborItem.amount.toFixed(2)})</span>
              <span>10x (${(laborItem.amount * 10).toFixed(2)})</span>
            </div>
          </div>

          {/* Marketing cut */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-foreground">Marketing Budget</span>
              <span className="text-secondary">{marketingCut}%</span>
            </div>
            <Slider
              value={[marketingCut]}
              onValueChange={([v]) => setMarketingCut(v)}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Eliminated ($0)</span>
              <span>Full (${marketingItem.amount.toFixed(2)})</span>
            </div>
          </div>

          {/* Profit cut */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-foreground">Corporate Profit</span>
              <span className="text-secondary">{profitCut}%</span>
            </div>
            <Slider
              value={[profitCut]}
              onValueChange={([v]) => setProfitCut(v)}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Zero profit ($0)</span>
              <span>Full (${profitItem.amount.toFixed(2)})</span>
            </div>
          </div>

          {/* Result */}
          <div className="border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-[10px] font-mono text-muted-foreground">ADJUSTED PRICE</div>
                <div className="font-display text-3xl text-foreground">
                  ${adjusted.newPrice.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted-foreground">
                  {adjusted.savings >= 0 ? "YOU'D SAVE" : "PRICE INCREASE"}
                </div>
                <div className={`font-display text-3xl ${adjusted.savings >= 0 ? "text-fair" : "text-primary"}`}>
                  ${Math.abs(adjusted.savings).toFixed(2)}
                </div>
              </div>
            </div>
            {laborMultiplier > 1 && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                Even with a <span className="text-fair font-semibold">{adjusted.laborRaise}</span> for workers
                {marketingCut < 100 && ` and ${100 - marketingCut}% less marketing`}
                {profitCut < 100 && ` and ${100 - profitCut}% less profit`},
                this product would cost <span className="text-foreground font-semibold">${adjusted.newPrice.toFixed(2)}</span>.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
