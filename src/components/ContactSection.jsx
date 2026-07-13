import { MapPin, Phone, Clock,  MessageCircle } from "lucide-react";
import { LOCATIONS } from "../data/data.js";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <span className="font-mono text-xs tracking-[0.3em] text-ember">VISIT THE COUNTER</span>
      <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10 text-bone">
        Two branches, open daily from noon
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {LOCATIONS.map((loc) => (
          <div key={loc.city} className="p-7 rounded-2xl bg-charcoal-2 border border-line">
            <h3 className="font-display text-xl mb-4 text-bone">{loc.city}</h3>
            <div className="space-y-3 font-body text-[14.5px] text-smoke">
              <div className="flex gap-3">
                <MapPin size={17} className="shrink-0 mt-0.5 text-amber" />
                <span>{loc.address}</span>
              </div>
              
              <div className="flex gap-3">
                <Phone size={17} className="shrink-0 mt-0.5 text-amber" />
                <span>{loc.phone}</span>
              </div>
              <div className="flex gap-3">
                <Clock size={17} className="shrink-0 mt-0.5 text-amber" />
                <span>Opens 12:00 PM daily</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm border border-line text-bone">
          <FaInstagram size={16} /> @cafefrenchys
        </a>
        <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm border border-line text-bone">
          <FaFacebookF size={16} /> Facebook
        </a>
        <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm bg-ember text-bone">
          <MessageCircle size={16} /> WhatsApp order
        </a>
      </div>
    </section>
  );
}