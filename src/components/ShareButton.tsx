import { ProductData } from "@/lib/productData";
import { Share2, Download, Check } from "lucide-react";
import { useState, useCallback } from "react";

interface ShareButtonProps {
  product: ProductData;
}

export function ShareButton({ product }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const generateShareText = useCallback(() => {
    const laborItem = product.breakdown.find(b => b.label === "Manufacturing Labor");
    const marketingItem = product.breakdown.find(b => b.label === "Brand Marketing");
    const laborPct = laborItem ? ((laborItem.amount / product.retailPrice) * 100).toFixed(1) : "?";
    const marketingPct = marketingItem ? ((marketingItem.amount / product.retailPrice) * 100).toFixed(1) : "?";

    return `🧾 ${product.name} costs $${product.retailPrice.toFixed(2)} but only ${laborPct}% goes to labor, while ${marketingPct}% goes to marketing. Markup: ${product.markupMultiplier}x over manufacturing cost.\n\nCheck the real cost breakdown → The Price Is Wrong`;
  }, [product]);

  const handleShare = async () => {
    const text = generateShareText();

    if (navigator.share) {
      try {
        await navigator.share({ title: `${product.name} — The Price Is Wrong`, text });
        return;
      } catch {
        // fallback to clipboard
      }
    }

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = useCallback(() => {
    const canvas = document.createElement("canvas");
    const w = 600;
    const h = 800;
    canvas.width = w * 2;
    canvas.height = h * 2;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(2, 2);

    // Background
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    // Receipt area
    const rx = 50, ry = 60, rw = 500, rh = 580;
    ctx.fillStyle = "#f5f3ee";
    ctx.fillRect(rx, ry, rw, rh);

    // Title
    ctx.fillStyle = "#1a1a1a";
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("THE PRICE IS WRONG", w / 2, ry + 45);

    ctx.font = "11px monospace";
    ctx.fillStyle = "#737373";
    ctx.fillText("COST TRANSPARENCY RECEIPT", w / 2, ry + 65);

    // Product name
    ctx.textAlign = "left";
    ctx.font = "bold 18px monospace";
    ctx.fillStyle = "#1a1a1a";
    ctx.fillText(product.name.toUpperCase(), rx + 25, ry + 110);

    ctx.font = "12px monospace";
    ctx.fillStyle = "#737373";
    ctx.fillText(`RETAIL: $${product.retailPrice.toFixed(2)}`, rx + 25, ry + 130);

    // Dashed line
    ctx.strokeStyle = "#c7c7c7";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(rx + 25, ry + 145);
    ctx.lineTo(rx + rw - 25, ry + 145);
    ctx.stroke();
    ctx.setLineDash([]);

    // Breakdown items
    ctx.font = "13px monospace";
    ctx.fillStyle = "#1a1a1a";
    let y = ry + 175;
    product.breakdown.forEach((item) => {
      const label = item.label;
      const val = `$${item.amount.toFixed(2)}`;
      ctx.textAlign = "left";
      ctx.fillText(label, rx + 25, y);
      ctx.textAlign = "right";
      ctx.fillText(val, rx + rw - 25, y);
      y += 24;
    });

    // Double line
    y += 5;
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rx + 25, y);
    ctx.lineTo(rx + rw - 25, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rx + 25, y + 3);
    ctx.lineTo(rx + rw - 25, y + 3);
    ctx.stroke();

    // Total
    y += 25;
    ctx.font = "bold 16px monospace";
    ctx.textAlign = "left";
    ctx.fillText("WHAT YOU PAY", rx + 25, y);
    ctx.textAlign = "right";
    ctx.fillText(`$${product.retailPrice.toFixed(2)}`, rx + rw - 25, y);

    // Markup multiplier
    y += 40;
    ctx.textAlign = "center";
    ctx.font = "10px monospace";
    ctx.fillStyle = "#737373";
    ctx.fillText("MARKUP MULTIPLIER", w / 2, y);
    ctx.font = "bold 48px sans-serif";
    ctx.fillStyle = "#e63946";
    ctx.fillText(`${product.markupMultiplier}x`, w / 2, y + 50);
    ctx.font = "10px monospace";
    ctx.fillStyle = "#737373";
    ctx.fillText("OVER MANUFACTURING COST", w / 2, y + 68);

    // Footer
    ctx.fillStyle = "#f5f3ee";
    ctx.font = "12px monospace";
    ctx.textAlign = "center";
    ctx.fillStyle = "#737373";
    ctx.fillText("thepriceiswrong.app — Built for Hackonomics 2026", w / 2, h - 30);

    // Download
    const link = document.createElement("a");
    link.download = `${product.name.toLowerCase().replace(/\s+/g, "-")}-receipt.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [product]);

  return (
    <div className="flex gap-2">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-3 py-2 text-xs font-mono border border-border rounded hover:border-primary/50 hover:text-primary text-muted-foreground transition-colors"
      >
        {copied ? <Check className="w-3 h-3 text-fair" /> : <Share2 className="w-3 h-3" />}
        {copied ? "COPIED!" : "SHARE"}
      </button>
      <button
        onClick={handleDownloadImage}
        className="flex items-center gap-2 px-3 py-2 text-xs font-mono border border-border rounded hover:border-primary/50 hover:text-primary text-muted-foreground transition-colors"
      >
        <Download className="w-3 h-3" />
        SAVE IMAGE
      </button>
    </div>
  );
}
