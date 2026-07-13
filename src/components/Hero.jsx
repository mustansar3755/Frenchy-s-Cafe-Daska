import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";
import { MoustacheMark } from "./UIBits.jsx";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="ember-glow" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-amber" />
            <span className="font-mono text-xs tracking-[0.3em] text-amber">
              ORDER No. 001 — DASKA &amp; SAMBRIAL
            </span>
          </div>
          <h1 className="font-display leading-[0.95] tracking-tight text-bone text-[clamp(2.75rem,7vw,6rem)]">
            Flame first.
            <br />
            <span className="italic font-serif-accent text-ember">Beyond addiction.</span>
          </h1>
          <p className="mt-7 max-w-xl font-body text-[17px] leading-relaxed text-smoke">
            Frenchy&apos;s is Daska&apos;s smokehouse-and-burger counter — honey-glazed wings, charcoal
            grills, and loaded fries built for people who order once and come back weekly.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/menu")}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-medium bg-amber text-charcoal"
            >
              See the full menu
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-body border border-line text-bone"
            >
              <MapPin size={17} /> Find a branch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 md:mt-20 md:absolute md:right-8 md:top-16 w-full max-w-70 ticket-edge p-6 bg-charcoal-2"
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] tracking-[0.25em] text-smoke">TABLE TICKET</span>
            <MoustacheMark className="w-6 h-3 text-amber" />
          </div>
          <div className="mt-4 space-y-2.5 font-mono text-[12px] text-bone">
            <div className="flex justify-between"><span>Honey Glazed Wings</span><span>800</span></div>
            <div className="flex justify-between"><span>Dhaka Chicken</span><span>670</span></div>
            <div className="flex justify-between"><span>Caramel White Pot</span><span>650</span></div>
          </div>
          <div className="mt-4 pt-4 flex justify-between font-mono text-[12px] border-t border-dashed border-line text-amber">
            <span>TOTAL</span><span>Rs 2,120</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}