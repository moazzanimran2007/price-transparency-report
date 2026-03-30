import { useState, useEffect, useRef } from "react";
import { ProductData } from "@/lib/productData";
import { playTick, playDing } from "@/lib/audioUtils";
import { CostBar } from "./CostBar";
import { ShameOMeter } from "./ShameOMeter";
import { WhatIfEditor } from "./WhatIfEditor";
import { ProductCharts } from "./ProductCharts";
import { ShareButton } from "./ShareButton";

interface ReceiptProps {
  product: ProductData;
}

export function Receipt({ product }: ReceiptProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [showShame, setShowShame] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const totalLines = product.breakdown.length + 6; // header + separator + items + separator + total + multiplier
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleLines(0);
    setShowBar(false);
    setShowShame(false);
    setShowLearn(false);

    let line = 0;
    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);
      playTick();
      if (line >= totalLines) {
        clearInterval(interval);
        playDing();
        setTimeout(() => setShowBar(true), 300);
        setTimeout(() => setShowShame(true), 800);
        setTimeout(() => setShowLearn(true), 1200);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [product, totalLines]);

  const formatPrice = (n: number) => `$${n.toFixed(2)}`;
  const pad = (label: string, amount: string, width = 36) => {
    const dots = ".".repeat(Math.max(1, width - label.length - amount.length));
    return `${label}${dots}${amount}`;
  };

  return (
    <div className="w-full max-w-md mx-auto" ref={containerRef}>
      {/* Torn top edge */}
      <div className="h-3 receipt-tear-top w-full" />

      {/* Receipt body */}
      <div className="receipt-paper receipt-shadow px-5 py-6 sm:px-8 sm:py-8 font-mono text-xs sm:text-sm leading-relaxed">
        {/* Header */}
        {visibleLines >= 1 && (
          <div className="text-center mb-1 animate-fade-in">
            <div className="font-display text-2xl sm:text-3xl tracking-wider text-receipt-foreground">
              THE PRICE IS WRONG
            </div>
          </div>
        )}
        {visibleLines >= 2 && (
          <div className="text-center text-receipt-muted text-[10px] sm:text-xs mb-4 animate-fade-in">
            COST TRANSPARENCY RECEIPT
          </div>
        )}

        {/* Product name */}
        {visibleLines >= 3 && (
          <div className="border-t border-dashed border-receipt-line pt-3 mb-3 animate-fade-in">
            <div className="font-bold text-sm sm:text-base text-receipt-foreground uppercase tracking-wide">
              {product.name}
            </div>
            <div className="text-receipt-muted text-[10px]">
              RETAIL: {formatPrice(product.retailPrice)}
            </div>
          </div>
        )}

        {/* Separator */}
        {visibleLines >= 4 && (
          <div className="border-t border-dashed border-receipt-line my-2 animate-fade-in" />
        )}

        {/* Cost breakdown lines */}
        {product.breakdown.map((item, i) => {
          const lineNum = 5 + i;
          if (visibleLines < lineNum) return null;
          return (
            <div key={item.label} className="animate-fade-in font-mono text-receipt-foreground whitespace-pre">
              {pad(item.label, formatPrice(item.amount))}
            </div>
          );
        })}

        {/* Total separator */}
        {visibleLines >= totalLines - 1 && (
          <div className="border-t border-double border-receipt-foreground my-3 animate-fade-in" />
        )}

        {/* Total */}
        {visibleLines >= totalLines && (
          <div className="animate-fade-in">
            <div className="font-bold text-base sm:text-lg text-receipt-foreground whitespace-pre">
              {pad("WHAT YOU PAY", formatPrice(product.retailPrice))}
            </div>

            {/* Markup multiplier */}
            <div className="mt-4 text-center border border-dashed border-receipt-line p-3">
              <div className="text-receipt-muted text-[10px] tracking-widest">MARKUP MULTIPLIER</div>
              <div className="font-display text-5xl sm:text-6xl text-danger mt-1">
                {product.markupMultiplier}x
              </div>
              <div className="text-receipt-muted text-[10px] mt-1">
                OVER MANUFACTURING COST
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Torn bottom edge */}
      <div className="h-3 receipt-tear w-full" />

      {/* Cost bar */}
      {showBar && (
        <div className="mt-8 animate-fade-in">
          <div className="text-muted-foreground text-xs font-mono tracking-widest mb-2">
            WHERE YOUR DOLLAR GOES
          </div>
          <CostBar breakdown={product.breakdown} total={product.retailPrice} />
        </div>
      )}

      {/* Shame-o-meter */}
      {showShame && (
        <div className="mt-8 animate-fade-in">
          <ShameOMeter score={product.shameScore} />
        </div>
      )}

      {/* Learn why */}
      {showLearn && (
        <div className="mt-8 animate-fade-in border border-border rounded p-4 sm:p-6">
          <div className="text-xs font-mono tracking-widest text-muted-foreground mb-3">
            WHY THIS MATTERS
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">
            {product.learnWhy}
          </p>
        </div>
      )}

      {/* What If Editor */}
      {showLearn && (
        <div className="mt-6 animate-fade-in">
          <WhatIfEditor product={product} />
        </div>
      )}

      {/* Charts */}
      {showLearn && (
        <div className="mt-6 animate-fade-in border border-border rounded p-4 sm:p-6">
          <ProductCharts product={product} />
        </div>
      )}

      {/* Share */}
      {showLearn && (
        <div className="mt-6 mb-12 animate-fade-in flex justify-center">
          <ShareButton product={product} />
        </div>
      )}
    </div>
  );
}
