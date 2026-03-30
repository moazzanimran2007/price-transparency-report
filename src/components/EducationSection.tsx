import { glossaryTerms, educationalInsights } from "@/lib/educationalContent";
import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export function EducationSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded text-xs font-mono text-muted-foreground mb-4">
          <BookOpen className="w-3 h-3" />
          FINANCIAL LITERACY
        </div>
        <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-foreground">
          UNDERSTAND THE <span className="text-primary">ECONOMICS</span>
        </h2>
        <p className="text-muted-foreground text-sm font-mono mt-2 max-w-lg mx-auto">
          The concepts behind the numbers. Knowledge is the first step toward fairer markets.
        </p>
      </div>

      {/* Key Insights */}
      <div className="space-y-4 mb-16">
        {educationalInsights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </div>

      {/* Glossary */}
      <div>
        <h3 className="font-display text-2xl tracking-wider text-foreground mb-6">
          ECONOMICS GLOSSARY
        </h3>
        <div className="space-y-1">
          {glossaryTerms.map((term) => (
            <GlossaryItem key={term.term} {...term} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightCard({ title, content, icon }: { title: string; content: string; icon: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border border-border rounded p-4 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl mt-0.5">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-mono text-sm font-semibold text-foreground">{title}</h4>
            {open ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
          </div>
          {open && (
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{content}</p>
          )}
        </div>
      </div>
    </button>
  );
}

function GlossaryItem({ term, definition, example }: { term: string; definition: string; example?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-border py-3 hover:bg-muted/30 transition-colors px-2"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-semibold text-primary">{term}</span>
        {open ? (
          <ChevronUp className="w-3 h-3 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        )}
      </div>
      {open && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">{definition}</p>
          {example && (
            <p className="text-xs text-foreground/50 mt-1 italic">Example: {example}</p>
          )}
        </div>
      )}
    </button>
  );
}
