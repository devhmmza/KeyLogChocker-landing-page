"use client"
import { cn } from "@/lib/utils"

export function ReportIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-16 h-16", className)}>
        <style>{`
            @media (prefers-reduced-motion: no-preference) {
                @keyframes pulse-glow {
                  0%, 100% { filter: drop-shadow(0 0 2px hsl(var(--primary))); opacity: 0.7; }
                  50% { filter: drop-shadow(0 0 5px hsl(var(--primary))); opacity: 1; }
                }
                .shield-pulse {
                  animation: pulse-glow 2.5s ease-in-out infinite;
                }
            }
        `}</style>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary/30">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="shield-pulse absolute w-8 h-8 text-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    </div>
  );
}
