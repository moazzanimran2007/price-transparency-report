import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Mission */}
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl tracking-wider text-foreground mb-4">
            ABOUT THE <span className="text-primary">PROJECT</span>
          </h1>
          <div className="h-px bg-border mb-6" />
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong className="text-foreground">The Price Is Wrong</strong> is a supply chain cost 
            transparency tool that reverse-engineers what you're actually paying for when you buy any 
            product. It was built for{" "}
            <span className="text-primary font-semibold">Hackonomics 2026</span> to promote financial 
            literacy and economic awareness.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Most consumers have no idea that the labor to assemble their $110 sneakers costs less than 
            $3, or that marketing budgets routinely exceed manufacturing costs by 5-10x. This opacity 
            isn't accidental — it's by design. Brands benefit from consumers not understanding the 
            economics of what they buy.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            This tool exists to make that invisible visible. By showing estimated cost breakdowns with 
            engaging visualizations, we hope to spark curiosity about supply chain economics, markup 
            structures, and the systemic forces that determine why things cost what they cost.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="font-display text-2xl tracking-wider text-foreground mb-4">HOW IT WORKS</h2>
          <div className="space-y-3">
            {[
              { step: "01", text: "Search for any consumer product — from sneakers to smartphones to coffee" },
              { step: "02", text: "The app generates an estimated cost breakdown based on industry data, teardown analyses, and public financial reports" },
              { step: "03", text: "A receipt-style visualization shows where every dollar of the retail price goes across the supply chain" },
              { step: "04", text: "The Shame-O-Meter™ rates the markup fairness, and educational content explains the economics behind the numbers" },
              { step: "05", text: "Compare two products side by side to see which has a fairer cost structure" },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 items-start">
                <span className="font-mono text-primary text-sm font-bold flex-shrink-0">{item.step}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Value */}
        <div className="mb-12">
          <h2 className="font-display text-2xl tracking-wider text-foreground mb-4">
            EDUCATIONAL <span className="text-primary">VALUE</span>
          </h2>
          <div className="border border-border rounded p-4 space-y-3">
            {[
              "Teaches supply chain economics through interactive exploration",
              "Introduces key concepts: markup, rent-seeking, value chains, externalities, and gross margins",
              "Provides a glossary of 12+ economic terms with real-world examples",
              "Encourages critical thinking about consumer spending and brand value",
              "Makes abstract economic concepts tangible through product-specific data",
            ].map((point, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-fair text-sm mt-0.5">✓</span>
                <p className="text-sm text-foreground/70">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="font-display text-2xl tracking-wider text-foreground mb-4">TECH STACK</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Framework", value: "React + TypeScript" },
              { label: "Styling", value: "Tailwind CSS" },
              { label: "Build", value: "Vite" },
              { label: "Audio", value: "Web Audio API" },
              { label: "Charts", value: "Recharts" },
              { label: "Routing", value: "React Router" },
            ].map((item) => (
              <div key={item.label} className="border border-border rounded px-3 py-2">
                <div className="text-[10px] font-mono text-muted-foreground">{item.label}</div>
                <div className="text-sm font-mono text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackonomics */}
        <div className="border border-primary/30 rounded p-6 text-center">
          <div className="text-xs font-mono text-muted-foreground tracking-widest mb-2">
            BUILT FOR
          </div>
          <div className="font-display text-3xl tracking-wider text-foreground mb-2">
            HACKONOMICS™ 2026
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Fusing economics, financial literacy, and computer science for community impact.
          </p>
          <a
            href="https://hackonomics-2026.devpost.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
          >
            VIEW ON DEVPOST <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
