import { CostBreakdown } from "@/lib/productData";

interface CostBarProps {
  breakdown: CostBreakdown[];
  total: number;
}

export function CostBar({ breakdown, total }: CostBarProps) {
  return (
    <div>
      {/* Stacked bar */}
      <div className="flex h-8 rounded-sm overflow-hidden">
        {breakdown.map((item) => {
          const pct = (item.amount / total) * 100;
          return (
            <div
              key={item.label}
              className="relative transition-all duration-700 ease-out"
              style={{
                width: `${pct}%`,
                backgroundColor: item.color,
                minWidth: pct > 2 ? undefined : "2px",
              }}
              title={`${item.label}: ${pct.toFixed(1)}%`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
        {breakdown.map((item) => {
          const pct = ((item.amount / total) * 100).toFixed(1);
          return (
            <div key={item.label} className="flex items-center gap-2 text-xs">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground font-mono truncate">
                {item.label}
              </span>
              <span className="text-foreground font-mono ml-auto">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
