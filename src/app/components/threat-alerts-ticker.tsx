'use client';
import { ShieldAlert } from 'lucide-react';

type ThreatAlertsTickerProps = {
  alerts: string[];
};

export function ThreatAlertsTicker({ alerts }: ThreatAlertsTickerProps) {
  if (!alerts || alerts.length === 0) return null;

  const allAlerts = alerts.join('  //  ');

  return (
    <div className="bg-background/30 backdrop-blur-sm border-y border-primary/20 text-primary font-code text-sm overflow-hidden">
      <div className="mx-auto px-4 py-2 flex items-center gap-4 whitespace-nowrap">
        <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0 animate-pulse" />
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex gap-12">
            <p>{allAlerts}</p>
            <p aria-hidden="true">{allAlerts}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
