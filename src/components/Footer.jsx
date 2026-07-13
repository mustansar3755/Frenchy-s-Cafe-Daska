import { MoustacheMark } from "./UIBits.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <MoustacheMark className="w-6 h-3 text-amber" />
          <span className="font-mono text-[11px] tracking-widest text-smoke">
            FRENCHY&apos;S CAFE — DASKA &amp; SAMBRIAL
          </span>
        </div>
        <span className="font-mono text-[11px] text-smoke">Redesign concept · not the live site</span>
      </div>
    </footer>
  );
}