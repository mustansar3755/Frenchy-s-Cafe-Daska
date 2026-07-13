import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { MoustacheMark } from "./UIBits.jsx";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu", end: false },
];

export default function Header({ cart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative font-body text-[15px] tracking-wide pb-1 transition-colors ${
      isActive ? "text-bone after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:rounded-full after:bg-ember" : "text-smoke"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-charcoal/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-18 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full flex items-center justify-center bg-amber">
            <MoustacheMark className="w-5 h-5 text-charcoal" />
          </span>
          <span className="flex flex-col leading-none text-left">
            <span className="font-display text-lg tracking-wide text-bone">FRENCHY&apos;S</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-smoke">CAFE · DASKA</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/#contact" className="font-body text-[15px] text-smoke">
            Visit
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border border-line">
            <ShoppingBag size={16} className="text-bone" />
            <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-mono bg-ember text-bone">
              {cart}
            </span>
          </div>
          <button className="md:hidden text-bone" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-1 border-t border-line">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className="py-3 font-body text-base text-bone border-b border-line"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}