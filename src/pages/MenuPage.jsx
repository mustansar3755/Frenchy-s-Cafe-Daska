import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { TicketNumber, Stars } from "../components/UIBits.jsx";
import { MENU, CATEGORIES } from "../data/data.js";

export default function MenuPage({ addToCart }) {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="mb-10">
        <span className="font-mono text-xs tracking-[0.3em] text-ember">THE MENU</span>
        <h1 className="font-display text-3xl md:text-4xl mt-2 text-bone">Order ticket, digitised</h1>
        <p className="font-body text-[15px] mt-3 max-w-xl text-smoke">
          Every section below mirrors what&apos;s actually on the counter — burgers, grill,
          starters, fries and dessert.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-10 -mx-1 px-1">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 px-4 py-2 rounded-full font-body text-sm whitespace-nowrap transition-colors ${
              active === c ? "bg-amber text-charcoal" : "border border-line text-smoke"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {MENU[active].map((item, i) => (
            <div key={item.name} className="ticket-edge p-6 flex flex-col justify-between bg-charcoal-2">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <TicketNumber n={`${String(i + 1).padStart(2, "0")}/${active.slice(0, 3).toUpperCase()}`} />
                  <Stars />
                </div>
                <h3 className="font-display text-lg text-bone">{item.name}</h3>
                <p className="font-body text-[13.5px] mt-2 leading-relaxed text-smoke">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between border-t border-dashed border-line">
                <span className="font-mono text-[15px] text-amber">Rs {item.price}</span>
                <button
                  onClick={() => addToCart(item.name)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full font-body text-xs bg-ember text-bone"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}