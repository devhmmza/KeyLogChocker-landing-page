"use client"
import { cn } from "@/lib/utils"

export function ScanIcon({ className }: { className?: string }) {
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
      <style>
        {`
          @media (prefers-reduced-motion: no-preference) {
            @keyframes binary-flow {
              0% { opacity: 0; transform: translateY(-8px); }
              50% { opacity: 1; }
              100% { opacity: 0; transform: translateY(8px); }
            }
            .b1 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 0s; }
            .b2 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 0.2s; }
            .b3 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 0.4s; }
            .b4 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 0.6s; }
            .b5 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 0.8s; }
            .b6 { animation: binary-flow 2.2s ease-in-out infinite; animation-delay: 1s; }
          }
        `}
      </style>
      <path d="M12 2L2 7l10 5 10-5-10-5z" opacity="0.5"/>
      <path d="M2 17l10 5 10-5" opacity="0.5"/>
      <path d="M2 12l10 5 10-5" opacity="0.5"/>
      <g fontFamily="monospace" fontSize="4px" textAnchor="middle" fill="currentColor">
        <text x="8" y="10.5" className="b1">0</text>
        <text x="12" y="10.5" className="b2">1</text>
        <text x="16" y="10.5" className="b3">1</text>
        <text x="8" y="15.5" className="b4">1</text>
        <text x="12" y="15.5" className="b5">0</text>
        <text x="16" y="15.5" className="b6">0</text>
      </g>
    </svg>
  );
}
