const STATS = [
  { k: "2", v: "Cities served" },
  { k: "1.8K+", v: "Instagram regulars" },
  { k: "Rs 1–4K", v: "Per-person spend" },
  { k: "12 PM", v: "Doors open daily" },
];

export default function StatsBar() {
  return (
    <section className="border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.v}>
            <div className="font-display text-2xl md:text-3xl text-bone">{s.k}</div>
            <div className="font-mono text-[11px] tracking-wide mt-1 text-smoke">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}