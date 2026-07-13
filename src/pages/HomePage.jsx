import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import SignatureDishes from "../components/SignatureDishes";
import StatsBar from "../components/StatsBar";
import Story from "../components/Story";


export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SignatureDishes />
      <Story />
      <ContactSection />
    </>
  );
}