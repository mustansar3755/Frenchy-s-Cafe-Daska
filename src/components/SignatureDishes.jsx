import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { TicketNumber, Stars } from "./UIBits.jsx";
import { SIGNATURE } from "../data/data.js";

export default function SignatureDishes() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-ember">OFF THE GRILL</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 text-bone">What people order twice</h2>
        </div>
        <button onClick={() => navigate("/menu")} className="flex items-center gap-1 font-body text-sm text-amber">
          Full menu <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SIGNATURE.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="dish-card p-5 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex justify-between items-start">
                <TicketNumber n={`00${i + 1}`} />
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-ember/15 text-ember">
                  {d.tag}
                </span>
              </div>
              <h3 className="font-display text-xl mt-4 text-bone">{d.name}</h3>
              <p className="font-body text-[13.5px] mt-2 leading-relaxed text-smoke">{d.note}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-[15px] text-amber">Rs {d.price}</span>
              <Stars />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}