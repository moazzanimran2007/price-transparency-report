import { useState } from "react";
import { Search, DollarSign } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string, price?: number) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Try "Nike Air Force 1" or "bananas"' }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const parsedPrice = price ? parseFloat(price) : undefined;
      onSearch(query.trim(), parsedPrice && parsedPrice > 0 ? parsedPrice : undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-2">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-muted border border-border rounded px-4 py-3 pr-12 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
      <div className="relative max-w-[200px] mx-auto">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price you paid"
          step="0.01"
          min="0.01"
          className="w-full bg-muted border border-border rounded px-4 py-2 pl-7 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-center"
        />
      </div>
    </form>
  );
}
