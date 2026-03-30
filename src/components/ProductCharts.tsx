import { ProductData } from "@/lib/productData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface ProductChartsProps {
  product: ProductData;
}

export function ProductCharts({ product }: ProductChartsProps) {
  const pieData = product.breakdown.map((item) => ({
    name: item.label,
    value: item.amount,
    color: item.color,
  }));

  // Group into categories for the bar chart
  const manufacturing = product.breakdown
    .filter(b => ["Raw Materials", "Manufacturing Labor", "Factory Overhead"].includes(b.label))
    .reduce((s, b) => s + b.amount, 0);
  const logistics = product.breakdown
    .filter(b => ["Shipping & Logistics", "Import Duties & Tariffs"].includes(b.label))
    .reduce((s, b) => s + b.amount, 0);
  const brandRetail = product.breakdown
    .filter(b => ["Brand Marketing", "Retailer Markup", "Corporate Profit"].includes(b.label))
    .reduce((s, b) => s + b.amount, 0);

  const categoryData = [
    { name: "Making It", value: +manufacturing.toFixed(2), fill: "hsl(170, 60%, 45%)" },
    { name: "Moving It", value: +logistics.toFixed(2), fill: "hsl(45, 70%, 50%)" },
    { name: "Selling It", value: +brandRetail.toFixed(2), fill: "hsl(355, 72%, 56%)" },
  ];

  // Industry comparison data (average markups)
  const industryData = [
    { name: "Eyewear", markup: 15.5 },
    { name: "Coffee", markup: 16.4 },
    { name: "Soda", markup: 19.1 },
    { name: "Sneakers", markup: 9.5 },
    { name: "Electronics", markup: 4.4 },
    { name: "Fast Fashion", markup: 4.5 },
    { name: "Drinkware", markup: 5.4 },
  ].sort((a, b) => b.markup - a.markup);

  return (
    <div className="space-y-8">
      <div className="text-xs font-mono tracking-widest text-muted-foreground mb-2">
        VISUAL BREAKDOWN
      </div>

      {/* Pie + Categories side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Pie chart */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground mb-2 text-center">
            COST DISTRIBUTION
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 8%)",
                  border: "1px solid hsl(0, 0%, 16%)",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "hsl(40, 20%, 92%)",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Category bars */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground mb-2 text-center">
            MAKING vs MOVING vs SELLING
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
              <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(0, 0%, 55%)", fontFamily: "JetBrains Mono" }} tickFormatter={(v) => `$${v}`} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: "hsl(0, 0%, 55%)", fontFamily: "JetBrains Mono" }} width={70} />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 8%)",
                  border: "1px solid hsl(0, 0%, 16%)",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "hsl(40, 20%, 92%)",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, ""]}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {categoryData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Industry comparison */}
      <div>
        <div className="text-[10px] font-mono text-muted-foreground mb-2">
          INDUSTRY MARKUP COMPARISON
        </div>
        <div className="space-y-2">
          {industryData.map((item) => {
            const width = (item.markup / 20) * 100;
            const isHighlighted = product.name.toLowerCase().includes(item.name.toLowerCase()) ||
              item.name.toLowerCase().includes(product.name.toLowerCase().split(" ")[0]);
            return (
              <div key={item.name} className="flex items-center gap-3">
                <span className={`text-xs font-mono w-24 text-right flex-shrink-0 ${isHighlighted ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {item.name}
                </span>
                <div className="flex-1 h-4 bg-muted rounded-sm overflow-hidden">
                  <div
                    className="h-full rounded-sm transition-all duration-700"
                    style={{
                      width: `${Math.min(width, 100)}%`,
                      backgroundColor: isHighlighted ? "hsl(355, 72%, 56%)" : "hsl(0, 0%, 30%)",
                    }}
                  />
                </div>
                <span className={`text-xs font-mono w-10 ${isHighlighted ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {item.markup}x
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
