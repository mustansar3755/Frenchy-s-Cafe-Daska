import { MoustacheMark } from "./UIBits.jsx";

export default function Story() {
  return (
    <section className="bg-charcoal-2">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-amber">THE COUNTER</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight text-bone">
            Built like a smokehouse, run like a kitchen ticket rail.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-relaxed text-smoke">
            Every dish at Frenchy&apos;s starts on the grill, not the fryer alone — honey glazes, charcoal
            smoke, and slow-built sauces. Two counters in Daska and Sambrial, one standard: bold
            ingredients, fast tickets, no shortcuts.
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <div className="font-display text-2xl text-ember">05</div>
              <div className="font-mono text-[11px] mt-1 text-smoke">Menu sections</div>
            </div>
            <div>
              <div className="font-display text-2xl text-ember">2</div>
              <div className="font-mono text-[11px] mt-1 text-smoke">Branch locations</div>
            </div>
          </div>
        </div>
        <div className="ticket-edge p-8 bg-charcoal">
          <p className="font-serif-accent italic text-2xl leading-snug text-bone">
            &ldquo;Our dining goes beyond flavor — an experience that stays with you.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full flex items-center justify-center bg-amber">
              <MoustacheMark className="w-4 h-4 text-charcoal" />
            </span>
            <div>
              <div className="font-body text-sm text-bone">Frenchy&apos;s Cafe</div>
              <div className="font-mono text-[10px] tracking-wide text-smoke">DASKA · SAMBRIAL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}