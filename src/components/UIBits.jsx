import { Flame } from "lucide-react";

export function MoustacheMark({ className = "" }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 14c-4 8-11 13-19 13-8 0-14-4-16-11-1 4 0 9 4 12 5 4 13 4 18-1 3-3 5-7 6-11 2-5 5-9 7-2 2-7 5-3 7 2 1 4 3 8 6 11 5 5 13 5 18 1 4-3 5-8 4-12-2 7-8 11-16 11-8 0-15-5-19-13z" />
    </svg>
  );
}

export function TicketNumber({ n }) {
  return <span className="font-mono text-[11px] tracking-widest text-amber">{n}</span>;
}

export function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber">
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame key={i} size={11} strokeWidth={2} fill={i < 4 ? "currentColor" : "none"} />
      ))}
    </div>
  );
}