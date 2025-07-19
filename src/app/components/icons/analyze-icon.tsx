"use client"
import { cn } from "@/lib/utils"

export function AnalyzeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-16 h-16 text-primary", className)}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes radar-sweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .radar-sweep-line {
            animation: radar-sweep 4s linear infinite;
            transform-origin: center;
            stroke: url(#radar-gradient);
          }
        }
      `}</style>
      <defs>
        <linearGradient id="radar-gradient">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="12" cy="12" r="6" opacity="0.3" />
      <circle cx="12" cy="12" r="2" opacity="0.2" />
      <line x1="12" y1="12" x2="12" y2="2" className="radar-sweep-line" strokeWidth="2" />
      <path d="M16.5 16.5l-1.5-1.5" strokeWidth="1.5" opacity="0.5"/>
      <path d="M8 8l1.5 1.5" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}
