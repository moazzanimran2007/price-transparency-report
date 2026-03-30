import { useEffect, useState } from "react";
import { getShameLabel } from "@/lib/productData";

interface ShameOMeterProps {
  score: number;
}

export function ShameOMeter({ score }: ShameOMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const { label, color } = getShameLabel(score);

  useEffect(() => {
    setAnimatedScore(0);
    const duration = 1000;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [score]);

  const needleRotation = -90 + (animatedScore / 100) * 180;

  return (
    <div className="text-center">
      <div className="text-xs font-mono tracking-widest text-muted-foreground mb-4">
        SHAME-O-METER™
      </div>

      {/* Gauge */}
      <div className="relative w-48 h-24 mx-auto">
        {/* Background arc */}
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(145, 63%, 42%)" />
              <stop offset="30%" stopColor="hsl(90, 55%, 45%)" />
              <stop offset="50%" stopColor="hsl(45, 70%, 50%)" />
              <stop offset="75%" stopColor="hsl(20, 70%, 50%)" />
              <stop offset="100%" stopColor="hsl(355, 72%, 56%)" />
            </linearGradient>
          </defs>
          {/* Arc track */}
          <path
            d="M 20 95 A 80 80 0 0 1 180 95"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Needle */}
          <line
            x1="100"
            y1="95"
            x2="100"
            y2="30"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${needleRotation}, 100, 95)`}
            style={{ transition: "transform 0.1s linear" }}
          />
          {/* Center dot */}
          <circle cx="100" cy="95" r="5" fill="hsl(0, 0%, 90%)" />
        </svg>

        {/* Labels */}
        <div className="absolute bottom-0 left-0 text-[8px] font-mono text-muted-foreground">
          FAIR
        </div>
        <div className="absolute bottom-0 right-0 text-[8px] font-mono text-muted-foreground">
          EXTRACTION
        </div>
      </div>

      {/* Score label */}
      <div
        className="font-display text-2xl mt-2 tracking-wider"
        style={{ color }}
      >
        {label.toUpperCase()}
      </div>
      <div className="text-muted-foreground font-mono text-xs mt-1">
        {animatedScore}/100
      </div>
    </div>
  );
}
