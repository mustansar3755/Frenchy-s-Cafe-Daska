import { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";

export default function App() {
  const [cart, setCart] = useState(0);
  const [toast, setToast] = useState("");
  const toastRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function addToCart(name) {
    setCart((c) => c + 1);
    setToast(`${name} added`);
    clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(""), 1800);
  }

  return (
    <div className="min-h-screen">
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
      </Routes>

      <Footer />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full font-body text-sm z-50 bg-bone text-charcoal">
          {toast}
        </div>
      )}
    </div>
  );
}